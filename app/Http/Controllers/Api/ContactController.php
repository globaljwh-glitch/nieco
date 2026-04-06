<?php

namespace App\Http\Controllers\Api;

use App\Http\Controllers\Controller;
use App\Models\Contact;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;
use App\Mail\ContactThankYouMail;
use App\Mail\ContactAdminNotificationMail;
use Illuminate\Support\Facades\Mail;

class ContactController extends Controller
{
    /**
     * Create mail test function
     */
    public function testEmail(Request $request) {

        $server = "10.1.15.156";
$port = 25;
 
$from = "test@unitedfoodscorp.com";
$to = "ramankantmca@gmail.com"; // change this
$subject = "SMTP Test Mail";
$message = "This is a test email sent using raw SMTP in PHP.";
 
$timeout = 30;
 
// Open socket
$socket = fsockopen($server, $port, $errno, $errstr, $timeout);
 
if (!$socket) {
    die("Connection failed: $errstr ($errno)");
}
 
// Start SMTP conversation
echo getResponse($socket);
 
sendCommand($socket, "HELO localhost");
sendCommand($socket, "MAIL FROM:<$from>");
sendCommand($socket, "RCPT TO:<$to>");
sendCommand($socket, "DATA");
 
// Email headers + body
$data = "Subject: $subject\r\n";
$data .= "From: $from\r\n";
$data .= "To: $to\r\n";
$data .= "\r\n$message\r\n.";
 
sendCommand($socket, $data);
 
sendCommand($socket, "QUIT");
 
fclose($socket);
 
//echo "\nEmail process completed.\n";

return response()->json([
                'success' => true,
                'message' => 'Mail sent successfully.'
            ], 200);
        // $to = "ramankant.vashisht@jwhglobal.com"; // change this
        // $subject = "Test Mail";
        // $message = "If you see this, mail() is working.";
        // $headers = "From: ramankant.vashisht@jwhglobal.com\r\n";
        // $headers .= "Reply-To: ramankant.vashisht@jwhglobal.com\r\n";
        // $headers .= "X-Mailer: PHP/" . phpversion();

        // if (mail($to, $subject, $message, $headers)) {
        //     //echo "Mail sent successfully";
        //     return response()->json([
        //         'success' => true,
        //         'message' => 'Mail sent successfully.'
        //     ], 200);
        // } else {
        //     //echo "Mail failed";
        //     return response()->json([
        //         'success' => true,
        //         'message' => 'Mail failed.'
        //     ], 200);
        // }
    }

    // Function to read response
public function getResponse($socket) {
    $response = '';
    while ($str = fgets($socket, 515)) {
        $response .= $str;
        if (substr($str, 3, 1) == " ") break;
    }
    return $response;
}
 
// Function to send command
public function sendCommand($socket, $command) {
    echo ">> $command\n";
    fputs($socket, $command . "\r\n");
    $response = getResponse($socket);
    echo "<< $response\n";
    return $response;
}

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'last_name' => 'nullable|string|max:255',
            'email' => 'required|email|max:255',
            'phone' => 'nullable|string|max:50',
            'company_name' => 'nullable|string|max:255',
            'street' => 'nullable|string|max:255',
            'city' => 'nullable|string|max:255',
            'state' => 'nullable|string|max:255',
            'zip_code' => 'nullable|string|max:20',
            'country' => 'nullable|string|max:255',
            'interested_in' => 'nullable|string',
            'use_of_product' => 'nullable|string|max:255',
            'final_application' => 'nullable|string',
            'captcha' => 'required|string',
        ]);

        $response = Http::asForm()->post(
            'https://www.google.com/recaptcha/api/siteverify',
            [
                'secret' => env('RECAPTCHA_SECRET_KEY'),
                'response' => $request->captcha,
                'remoteip' => $request->ip(),
            ]
        );

        if (! $response->json('success')) {
            return response()->json([
                'success' => false,
                'message' => 'Captcha verification failed.'
            ], 422);
        }

        $contact = Contact::create($data);

        // Send thank you email to user
        Mail::to($contact->email)
            ->send(new ContactThankYouMail($contact));

        // Send notification email to admin
        Mail::to(env('ADMIN_EMAIL'))
            ->send(new ContactAdminNotificationMail($contact));


        return response()->json([
            'success' => true,
            'message' => 'Contact submitted successfully.',
            'data' => $contact,
        ], 201);
    }
}

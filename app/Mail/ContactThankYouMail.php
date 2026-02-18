<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactThankYouMail extends Mailable
{
    use SerializesModels;

    public $contact;

    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->subject('Thank You for Contacting Us')
                    ->view('emails.contact-thank-you');
    }
}

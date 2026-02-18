<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ContactAdminNotificationMail extends Mailable
{
    use SerializesModels;

    public $contact;

    public function __construct($contact)
    {
        $this->contact = $contact;
    }

    public function build()
    {
        return $this->subject('New Contact Form Submission')
                    ->view('emails.contact-admin');
    }
}

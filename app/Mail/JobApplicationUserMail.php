<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class JobApplicationUserMail extends Mailable
{
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->subject('Application Received')
            ->view('emails.job_user')
            ->with('data', $this->data);
    }
}
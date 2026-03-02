<?php

namespace App\Mail;

use Illuminate\Mail\Mailable;

class JobApplicationAdminMail extends Mailable
{
    public $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function build()
    {
        return $this->subject('New Job Application')
            ->view('emails.job_admin')
            ->with('data', $this->data)
            ->attach($this->data['resume_path']);
    }
}
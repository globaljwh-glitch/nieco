<?php

namespace App\Http\Controllers;

use App\Models\Career;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Facades\Http;
use App\Mail\JobApplicationAdminMail;
use App\Mail\JobApplicationUserMail;

class CareerController extends Controller
{
    /**
     * Job email send
     */
    public function apply(Request $request, $id)
    {
        $request->validate([
            'name' => 'required',
            'phone' => 'required',
            'email' => 'required|email',
            'subject' => 'required',
            'resume' => 'required|mimes:pdf,doc,docx|max:2048',
            'captcha' => 'required'
        ]);

        // Verify reCAPTCHA
        // $captcha = Http::asForm()->post(
        //     'https://www.google.com/recaptcha/api/siteverify',
        //     [
        //         'secret' => config('services.recaptcha.secret'),
        //         'response' => $request->captcha,
        //     ]
        // );

        // if (!$captcha->json('success')) {
        //     return response()->json(['message' => 'Captcha failed'], 422);
        // }

        $captcha = Http::asForm()->post(
            'https://www.google.com/recaptcha/api/siteverify',
            [
                'secret' => env('RECAPTCHA_SECRET_KEY'),
                'response' => $request->captcha,
                'remoteip' => $request->ip(),
            ]
        );

        if (! $captcha->json('success')) {
            return response()->json([
                'success' => false,
                'message' => 'Captcha verification failed.'
            ], 422);
        }

        // Store resume temporarily
        $path = $request->file('resume')->store('temp_resumes');

        $data = [
            'job_id' => $id,
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'subject' => $request->subject,
            'resume_path' => storage_path('app/' . $path),
        ];

        // Send mail to admin
        Mail::to(env('MAIL_ADMIN_EMAIL'))
            ->send(new JobApplicationAdminMail($data));

        // Send confirmation to user
        Mail::to($request->email)
            ->send(new JobApplicationUserMail($data));

        // Delete file after sending
        Storage::delete($path);

        return response()->json(['message' => 'Application submitted successfully']);
    }

    /**
     * This api used to get job detail on job detail page
     */
    public function showApi($id)
    {
        $job = Career::findOrFail($id);
        return response()->json($job);
    }

    /**
     * This api is getting data for career page - job listing
     */
    public function apiIndex(Request $request)
    {
        $query = Career::where('status', 1);

        // Search filter
        if ($request->search) {
            $query->where(function ($q) use ($request) {
                $q->where('title', 'like', '%' . $request->search . '%')
                ->orWhere('department', 'like', '%' . $request->search . '%')
                ->orWhere('description', 'like', '%' . $request->search . '%');
            });
        }

        $careers = $query->orderBy('created_at', 'desc')->get();

        return response()->json($careers);
    }

    /**
     * All below apis are belong to admin apis
     */
    public function index()
    {
        $careers = Career::orderBy('created_at', 'desc')->paginate(10);
        return view('careers.index', compact('careers'));
    }

    public function create()
    {
        return view('careers.create');
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'department' => 'required|string|max:255',
            'status' => 'required|boolean',
        ]);

        Career::create($request->all());

        return redirect()->route('careers.index')
            ->with('success', 'Job created successfully.');
    }

    public function edit(Career $career)
    {
        return view('careers.edit', compact('career'));
    }

    public function update(Request $request, Career $career)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'description' => 'required',
            'department' => 'required|string|max:255',
            'status' => 'required|boolean',
        ]);

        $career->update($request->all());

        return redirect()->route('careers.index')
            ->with('success', 'Job updated successfully.');
    }

    public function destroy(Career $career)
    {
        $career->delete();

        return redirect()->route('careers.index')
            ->with('success', 'Job deleted successfully.');
    }
}

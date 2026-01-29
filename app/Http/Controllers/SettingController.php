<?php

namespace App\Http\Controllers;

use App\Models\Setting;
use Illuminate\Http\Request;

class SettingController extends Controller
{
    public function index()
    {
        $settings = Setting::orderBy('key')->paginate(20);
        return view('settings.index', compact('settings'));
    }

    public function create()
    {
        return view('settings.create', [
            'setting' => new Setting()
        ]);
    }

    public function edit(Setting $setting)
    {
        return view('settings.edit', compact('setting'));
    }

    public function store(Request $request)
    {
        $request->validate([
            'key' => 'required|string|unique:settings,key',
            'value' => 'nullable|string',
            'status' => 'required|boolean',
        ]);

        Setting::create($request->only('key', 'value', 'status'));

        return redirect()
            ->route('settings.index')
            ->with('success', 'Setting created successfully.');
    }

    public function update(Request $request, Setting $setting)
    {
        $request->validate([
            'key' => 'required|string|unique:settings,key,' . $setting->id,
            'value' => 'nullable|string',
            'status' => 'required|boolean',
        ]);

        $setting->update($request->only('key', 'value', 'status'));

        return redirect()
            ->route('settings.index')
            ->with('success', 'Setting updated successfully.');
    }

    public function destroy(Setting $setting)
    {
        $setting->delete();

        return redirect()
            ->route('settings.index')
            ->with('success', 'Setting deleted successfully.');
    }
}

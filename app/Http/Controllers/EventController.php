<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    public function index(Request $request)
    {
        $query = Event::query();

        if ($request->filled('search')) {
            $query->where('event_name', 'like', '%' . $request->search . '%');
        }

        $events = $query
            ->orderBy('event_date', 'desc')
            ->paginate(10)
            ->withQueryString();

        return view('events.index', compact('events'));
    }

    public function create()
    {
        return view('events.create', [
            'event' => new Event(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'event_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'event_date' => 'required|date',
            'url' => 'nullable|url',
            'image' => 'nullable|image|max:2048',
            'thumbnail' => 'nullable|image|max:1024',
            'display_order' => 'nullable|integer|min:0',
            'status' => 'required|boolean',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')
                ->store('events', 'public');
        }

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')
                ->store('events/thumbnails', 'public');
        }

        Event::create($data);

        return redirect()
            ->route('events.index')
            ->with('success', 'Event created successfully.');
    }

    public function edit(Event $event)
    {
        return view('events.edit', compact('event'));
    }

    public function update(Request $request, Event $event)
    {
        $data = $request->validate([
            'event_name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'event_date' => 'required|date',
            'url' => 'nullable|url',
            'image' => 'nullable|image|max:2048',
            'thumbnail' => 'nullable|image|max:1024',
            'display_order' => 'nullable|integer|min:0',
            'status' => 'required|boolean',
        ]);

        if ($request->hasFile('image')) {
            if ($event->image) {
                Storage::disk('public')->delete($event->image);
            }
            $data['image'] = $request->file('image')
                ->store('events', 'public');
        }

        if ($request->hasFile('thumbnail')) {
            if ($event->thumbnail) {
                Storage::disk('public')->delete($event->thumbnail);
            }
            $data['thumbnail'] = $request->file('thumbnail')
                ->store('events/thumbnails', 'public');
        }

        $event->update($data);

        return redirect()
            ->route('events.index')
            ->with('success', 'Event updated successfully.');
    }

    public function destroy(Event $event)
    {
        if ($event->image) {
            Storage::disk('public')->delete($event->image);
        }

        if ($event->thumbnail) {
            Storage::disk('public')->delete($event->thumbnail);
        }

        $event->delete();

        return redirect()
            ->route('events.index')
            ->with('success', 'Event deleted successfully.');
    }
}

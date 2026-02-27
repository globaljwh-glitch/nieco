<?php

namespace App\Http\Controllers;

use App\Models\Event;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class EventController extends Controller
{
    /**
     * This method is use for frontend Events page (Media and Trade show)
     */
    public function eventPage()
    {
        $events = Event::where('status', 1)
        ->orderBy('display_order', 'asc')
        ->select('id', 'event_name', 'url', 'image', 'event_date', 'event_end_date')
        ->get()
        ->map(function ($events) {
            return [
                'id' => $events->id,
                'event_name' => $events->event_name,
                'image' => Storage::url($events->image),
                'url' => $events->url,
                'event_date' => $events->event_date,
                'event_end_date' => $events->event_end_date,
            ];
        });

        return response()->json($events);
    }

    /**
     * Below are backend methods
     */
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
            //'event_date' => 'required|date',
            //'event_end_date' => 'required|date',
            'event_date' => 'required|date|after_or_equal:today',
            'event_end_date' => 'required|date|after_or_equal:event_date',
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
            //'event_date' => 'required|date',
            //'event_end_date' => 'required|date',
            'event_date' => 'required|date|after_or_equal:today',
            'event_end_date' => 'required|date|after_or_equal:event_date',
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

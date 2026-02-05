<?php

namespace App\Http\Controllers;

use App\Models\Partnership;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class PartnershipController extends Controller
{
    public function index(Request $request)
    {
        $query = Partnership::query();

        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        $partnerships = $query
            ->orderBy('display_order')
            ->paginate(10)
            ->withQueryString();

        return view('partnerships.index', compact('partnerships'));
    }

    public function create()
    {
        return view('partnerships.create', [
            'partnership' => new Partnership(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'url' => 'nullable|url',
            'image' => 'nullable|image|max:2048',
            'thumbnail' => 'nullable|image|max:1024',
            'display_order' => 'nullable|integer|min:0',
            'status' => 'required|boolean',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')
                ->store('partnerships', 'public');
        }

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')
                ->store('partnerships/thumbnails', 'public');
        }

        Partnership::create($data);

        return redirect()
            ->route('partnerships.index')
            ->with('success', 'Partnership created successfully.');
    }

    public function edit(Partnership $partnership)
    {
        return view('partnerships.edit', compact('partnership'));
    }

    public function update(Request $request, Partnership $partnership)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'url' => 'nullable|url',
            'image' => 'nullable|image|max:2048',
            'thumbnail' => 'nullable|image|max:1024',
            'display_order' => 'nullable|integer|min:0',
            'status' => 'required|boolean',
        ]);

        if ($request->hasFile('image')) {
            if ($partnership->image) {
                Storage::disk('public')->delete($partnership->image);
            }
            $data['image'] = $request->file('image')
                ->store('partnerships', 'public');
        }

        if ($request->hasFile('thumbnail')) {
            if ($partnership->thumbnail) {
                Storage::disk('public')->delete($partnership->thumbnail);
            }
            $data['thumbnail'] = $request->file('thumbnail')
                ->store('partnerships/thumbnails', 'public');
        }

        $partnership->update($data);

        return redirect()
            ->route('partnerships.index')
            ->with('success', 'Partnership updated successfully.');
    }

    public function destroy(Partnership $partnership)
    {
        if ($partnership->image) {
            Storage::disk('public')->delete($partnership->image);
        }

        if ($partnership->thumbnail) {
            Storage::disk('public')->delete($partnership->thumbnail);
        }

        $partnership->delete();

        return redirect()
            ->route('partnerships.index')
            ->with('success', 'Partnership deleted successfully.');
    }
}

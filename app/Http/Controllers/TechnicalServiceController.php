<?php

namespace App\Http\Controllers;

use App\Models\TechnicalService;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class TechnicalServiceController extends Controller
{
    /**
     * This method is use for frontend technical services page
     */
    public function frontIndex()
    {
        $services = TechnicalService::where('status', 1)
        ->orderBy('display_order', 'asc')
        ->select('id', 'name', 'description', 'image')
        ->get()
        ->map(function ($services) {
            return [
                'id' => $services->id,
                'name' => $services->name,
                'image' => Storage::url($services->image),
                'description' => $services->description,
            ];
        });

        return response()->json($services);
    }

    /**
     * Below are backend methods
     */
    public function index()
    {
        $services = TechnicalService::orderBy('display_order')
            ->paginate(10);

        return view('technical-services.index', compact('services'));
    }

    public function create()
    {
        return view('technical-services.create', [
            'service' => new TechnicalService(),
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'thumbnail' => 'nullable|image|max:1024',
            'extra_data' => 'nullable|array',
            'status' => 'required|boolean',
            'display_order' => 'nullable|integer|min:0',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')
                ->store('technical-services', 'public');
        }

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')
                ->store('technical-services/thumbnails', 'public');
        }

        TechnicalService::create($data);

        return redirect()
            ->route('technical-services.index')
            ->with('success', 'Technical service created successfully.');
    }

    public function edit(TechnicalService $technicalService)
    {
        return view('technical-services.edit', [
            'service' => $technicalService,
        ]);
    }

    public function update(Request $request, TechnicalService $technicalService)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'thumbnail' => 'nullable|image|max:1024',
            'extra_data' => 'nullable|array',
            'status' => 'required|boolean',
            'display_order' => 'nullable|integer|min:0',
        ]);

        if ($request->hasFile('image')) {
            if ($technicalService->image) {
                Storage::disk('public')->delete($technicalService->image);
            }
            $data['image'] = $request->file('image')
                ->store('technical-services', 'public');
        }

        if ($request->hasFile('thumbnail')) {
            if ($technicalService->thumbnail) {
                Storage::disk('public')->delete($technicalService->thumbnail);
            }
            $data['thumbnail'] = $request->file('thumbnail')
                ->store('technical-services/thumbnails', 'public');
        }

        $technicalService->update($data);

        return redirect()
            ->route('technical-services.index')
            ->with('success', 'Technical service updated successfully.');
    }

    public function destroy(TechnicalService $technicalService)
    {
        if ($technicalService->image) {
            Storage::disk('public')->delete($technicalService->image);
        }

        if ($technicalService->thumbnail) {
            Storage::disk('public')->delete($technicalService->thumbnail);
        }

        $technicalService->delete();

        return redirect()
            ->route('technical-services.index')
            ->with('success', 'Technical service deleted successfully.');
    }
}

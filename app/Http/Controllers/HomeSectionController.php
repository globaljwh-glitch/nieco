<?php

namespace App\Http\Controllers;

use App\Models\HomeSection;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class HomeSectionController extends Controller
{
    /**
     * This section will get partial industries section at home page - frontend
     */
    public function frontIndustries()
    {
        $section = \App\Models\HomeSection::where('section_key', 'industries')
            ->where('status', 1)
            ->first();

        if (!$section) {
            return response()->json([]);
        }

        return response()->json([
            'title' => $section->title,
            'content' => $section->content,
        ]);
    }

    /**
     * This section will get country section at home page - frontend
     */
    public function frontCountries()
    {
        $section = \App\Models\HomeSection::where('section_key', 'countries')
            ->where('status', 1)
            ->first();

        if (!$section) {
            return response()->json([]);
        }

        return response()->json([
            'title' => $section->title,
            'content' => $section->content,
            'image' => $section->images
                ? asset('storage/' . $section->images[0])
                : null,
        ]);
    }

    /**
     * This section will get footer section - frontend
     */
    public function frontFooter()
    {
        $section = \App\Models\HomeSection::where('section_key', 'footer')
            ->where('status', 1)
            ->first();

        if (!$section) {
            return response()->json([]);
        }

        return response()->json([
            'content' => $section->content,
            'copyright' => $section->subtitle,
        ]);
    }

    /**
     * This section will get strategic section on home page - frontend
     */
    public function frontStrategic()
    {
        $section = \App\Models\HomeSection::where('section_key', 'strategic_block')
            ->where('status', 1)
            ->first();

        if (!$section) {
            return response()->json([]);
        }

        return response()->json([
            'title' => $section->title,
            'content' => $section->content,
            'images' => collect($section->images)->map(function ($img) {
                return asset('storage/' . $img);
            }),
        ]);
    }

    /**
     * This section will get "who we are" section on home page - frontend
     */
    public function frontWhoWeAre()
    {
        $section = \App\Models\HomeSection::where('section_key', 'who_we_are')
            ->where('status', 1)
            ->first();

        if (!$section) {
            return response()->json([]);
        }

        return response()->json([
            'content' => $section->content
        ]);
    }

    /**
     * This section will get banners on home page - frontend 
     */
    public function frontBanner()
    {
        $banner = HomeSection::where('section_key', 'banner')
            ->where('status', 1)
            ->first();

        if (!$banner) {
            return response()->json([]);
        }

        return response()->json([
            'title' => $banner->title,
            'subtitle' => $banner->subtitle,
            'content' => $banner->content,
            'images' => collect($banner->images)->map(function ($img) {
                return asset('storage/' . $img);
            }),
        ]);
    }

    // Below are all backend admin APIs
    // Admin Listing
    public function index()
    {
        $sections = HomeSection::orderBy('display_order')->get();
        return view('home_sections.index', compact('sections'));
    }

    // Show Create Form
    public function create()
    {
        $sectionKeys = $this->sectionKeys();
        return view('home_sections.create', compact('sectionKeys'));
    }


    // Store Section
    public function store(Request $request)
    {
        $request->validate([
            'section_key' => 'required|unique:home_sections,section_key',
        ]);

        $images = [];

        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $images[] = $file->store('home', 'public');
            }
        }

        HomeSection::create([
            'section_key' => $request->section_key,
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'content' => $request->content,
            'images' => $images,
            'status' => $request->status ?? 1,
            'display_order' => $request->display_order ?? 0,
        ]);

        return redirect()->route('home-sections.index')
            ->with('success', 'Section created successfully.');
    }

    // Edit Form
    public function edit(HomeSection $homeSection)
    {
        $sectionKeys = $this->sectionKeys();
        return view('home_sections.edit', compact('homeSection','sectionKeys'));
    }

    // Update Section
    // public function update(Request $request, HomeSection $homeSection)
    // {
    //     $images = $homeSection->images ?? [];

    //     if ($request->hasFile('images')) {
    //         foreach ($request->file('images') as $file) {
    //             $images[] = $file->store('home', 'public');
    //         }
    //     }

    //     $homeSection->update([
    //         'title' => $request->title,
    //         'subtitle' => $request->subtitle,
    //         'content' => $request->content,
    //         'images' => $images,
    //         'status' => $request->status ?? 1,
    //         'display_order' => $request->display_order ?? 0,
    //     ]);

    //     return redirect()->route('home-sections.index')
    //         ->with('success', 'Section updated successfully.');
    // }

    public function update(Request $request, HomeSection $homeSection)
    {
        $images = $homeSection->images ?? [];

        // Remove Selected Images
        if ($request->has('remove_images')) {

            foreach ($request->remove_images as $imgToRemove) {

                // Remove from array
                $images = array_filter($images, function ($img) use ($imgToRemove) {
                    return $img !== $imgToRemove;
                });

                // Delete physical file
                if (Storage::disk('public')->exists($imgToRemove)) {
                    Storage::disk('public')->delete($imgToRemove);
                }
            }

            // Reindex array
            $images = array_values($images);
        }

        // Add New Images
        if ($request->hasFile('images')) {
            foreach ($request->file('images') as $file) {
                $images[] = $file->store('home', 'public');
            }
        }

        $homeSection->update([
            'title' => $request->title,
            'subtitle' => $request->subtitle,
            'content' => $request->content,
            'images' => $images,
            'status' => $request->status ?? 1,
            'display_order' => $request->display_order ?? 0,
        ]);

        return redirect()->route('home-sections.index')
            ->with('success', 'Section updated successfully.');
    }

    // Public API
    public function frontIndex()
    {
        $sections = HomeSection::where('status', 1)
            ->orderBy('display_order')
            ->get()
            ->keyBy('section_key')
            ->map(function ($section) {
                return [
                    'title' => $section->title,
                    'subtitle' => $section->subtitle,
                    'content' => $section->content,
                    'images' => collect($section->images)->map(function ($img) {
                        return Storage::url($img);
                    }),
                ];
            });

        return response()->json($sections);
    }

    private function sectionKeys()
    {
        return [
            'banner' => 'Banner Section',
            'who_we_are' => 'Who We Are',
            'strategic_block' => 'Strategic Block',
            'facilities' => 'Our Facilities',
            'industries' => 'Industries Section',
            'countries' => 'Countries Section',
            'footer' => 'Footer Section',
        ];
    }

}

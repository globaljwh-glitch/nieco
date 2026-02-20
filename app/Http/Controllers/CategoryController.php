<?php

namespace App\Http\Controllers;

use App\Models\Category;
use App\Models\Product;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

class CategoryController extends Controller
{
    /**
     * Category detail page at frontend
     */
    public function frontShow($slug)
    {
        $category = Category::where('slug', $slug)
            ->where('status', 1)
            ->firstOrFail();

        // Fix image paths safely
        if ($category->image) {
            $category->image = Storage::url($category->image);
        }

        if ($category->detail_image_one) {
            $category->detail_image_one = Storage::url($category->detail_image_one);
        }

        if ($category->detail_image_two) {
            $category->detail_image_two = Storage::url($category->detail_image_two);
        }

        $products = Product::where('category_id', $category->id)
            ->where('status', 1)
            ->orderBy('display_order')
            ->get(['id', 'title', 'slug']);

        return response()->json([
            'category' => $category,
            'products' => $products,
        ]);
    }

    /**
     * This method is use for frontend home page - Industries Served section
     */
    public function frontIndex()
    {
        $categories = Category::where('status', 1)
        ->where('is_featured', 1)
        ->orderBy('display_order', 'asc')
        ->get()
        ->map(function ($category) {
            return [
                'id' => $category->id,
                'name' => $category->name,
                'slug' => $category->slug,
                'image' => Storage::url($category->image), // if stored in storage
                'thumbnail' => Storage::url($category->thumbnail),
                'description' => $category->description,
            ];
        });

        return response()->json($categories);
    }

    /**
     * All below methods are use for backend CRUD operations
     */
    public function index(Request $request)
    {
        $query = Category::query();

        if ($request->filled('search')) {
            $query->where('name', 'like', '%' . $request->search . '%');
        }

        $categories = $query
            ->orderBy('display_order')
            ->paginate(10)
            ->withQueryString();

        return view('categories.index', compact('categories'));
    }

    public function create()
    {
        return view('categories.create', [
            'category' => new Category()
        ]);
    }

    public function store(Request $request)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'thumbnail' => 'nullable|image|max:1024',
            'detail_image_one' => 'nullable|image',
            'detail_image_two' => 'nullable|image',
            'detail_content' => 'nullable|string',
            'products_section_title' => 'nullable|string',
            'products_section_description' => 'nullable|string',
            'status' => 'required|boolean',
            'is_featured' => 'required|boolean',
            'display_order' => 'nullable|integer|min:0',
        ]);

        if ($request->hasFile('image')) {
            $data['image'] = $request->file('image')->store('categories', 'public');
        }

        if ($request->hasFile('thumbnail')) {
            $data['thumbnail'] = $request->file('thumbnail')->store('categories/thumbnails', 'public');
        }

        /*
        |--------------------------------------------------------------------------
        | Detail Image One
        |--------------------------------------------------------------------------
        */

        // Add new image
        if ($request->hasFile('detail_image_one')) {
            $data['detail_image_one'] =
                $request->file('detail_image_one')->store('categories', 'public');
        }

        /*
        |--------------------------------------------------------------------------
        | Detail Image Two
        |--------------------------------------------------------------------------
        */

        if ($request->hasFile('detail_image_two')) {
            $data['detail_image_two'] =
                $request->file('detail_image_two')->store('categories', 'public');
        }

        Category::create($data);

        return redirect()
            ->route('categories.index')
            ->with('success', 'Category created successfully.');
    }

    public function edit(Category $category)
    {
        return view('categories.edit', compact('category'));
    }

    public function update(Request $request, Category $category)
    {
        $data = $request->validate([
            'name' => 'required|string|max:255',
            'description' => 'nullable|string',
            'image' => 'nullable|image|max:2048',
            'thumbnail' => 'nullable|image|max:1024',
            'detail_image_one' => 'nullable|image',
            'detail_image_two' => 'nullable|image',
            'detail_content' => 'nullable|string',
            'products_section_title' => 'nullable|string',
            'products_section_description' => 'nullable|string',
            'status' => 'required|boolean',
            'is_featured' => 'required|boolean',
            'display_order' => 'nullable|integer|min:0',
        ]);

        if ($request->hasFile('image')) {
            if ($category->image) {
                Storage::disk('public')->delete($category->image);
            }
            $data['image'] = $request->file('image')->store('categories', 'public');
        }

        if ($request->hasFile('thumbnail')) {
            if ($category->thumbnail) {
                Storage::disk('public')->delete($category->thumbnail);
            }
            $data['thumbnail'] = $request->file('thumbnail')->store('categories/thumbnails', 'public');
        }

        /*
        |--------------------------------------------------------------------------
        | Detail Image One
        |--------------------------------------------------------------------------
        */

        // Remove image manually
        if ($request->has('remove_detail_image_one')) {
            if ($category->detail_image_one) {
                Storage::disk('public')->delete($category->detail_image_one);
            }
            $data['detail_image_one'] = null;
        }

        // Replace image
        if ($request->hasFile('detail_image_one')) {
            if ($category->detail_image_one) {
                Storage::disk('public')->delete($category->detail_image_one);
            }

            $data['detail_image_one'] =
                $request->file('detail_image_one')->store('categories', 'public');
        }

        /*
        |--------------------------------------------------------------------------
        | Detail Image Two
        |--------------------------------------------------------------------------
        */

        if ($request->has('remove_detail_image_two')) {
            if ($category->detail_image_two) {
                Storage::disk('public')->delete($category->detail_image_two);
            }
            $data['detail_image_two'] = null;
        }

        if ($request->hasFile('detail_image_two')) {
            if ($category->detail_image_two) {
                Storage::disk('public')->delete($category->detail_image_two);
            }

            $data['detail_image_two'] =
                $request->file('detail_image_two')->store('categories', 'public');
        }

        $category->update($data);

        return redirect()
            ->route('categories.index')
            ->with('success', 'Category updated successfully.');
    }

    public function destroy(Category $category)
    {
        if ($category->image) {
            Storage::disk('public')->delete($category->image);
        }

        if ($category->thumbnail) {
            Storage::disk('public')->delete($category->thumbnail);
        }

        $category->delete();

        return redirect()
            ->route('categories.index')
            ->with('success', 'Category deleted successfully.');
    }

}

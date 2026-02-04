<?php

namespace App\Http\Controllers;

use App\Models\Product;
use App\Models\Category;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use App\Models\ProductInformation;
use App\Models\ProductPhysicalChemicalCharacteristic;
use DB;

class ProductController extends Controller
{
    public function index(Request $request)
    {
        $query = Product::with('category');

        // Search by product title
        if ($request->filled('search')) {
            $query->where('title', 'like', '%' . $request->search . '%');
        }

        $products = $query
            ->orderBy('display_order')
            ->paginate(10)
            ->withQueryString(); // keeps search during pagination

        return view('products.index', compact('products'));
    }


    public function create()
    {
        return view('products.create', [
            'product' => new Product(),
            'categories' => Category::where('status', 1)->get(),
        ]);
    }

    public function store(Request $request)
    {
        DB::transaction(function () use ($request) {

            $data = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'category_id' => 'required|exists:categories,id',
                'other' => 'nullable|string',
                'packing' => 'nullable|string',
                'external_url' => 'nullable|url',
                'external_url_label' => 'nullable|string|max:255',
                'image' => 'nullable|image|max:2048',
                'thumbnail' => 'nullable|image|max:1024',
                'status' => 'required|boolean',
                'display_order' => 'nullable|integer|min:0',
            ]);

            if ($request->hasFile('image')) {
                $data['image'] = $request->file('image')->store('products', 'public');
            }

            if ($request->hasFile('thumbnail')) {
                $data['thumbnail'] = $request->file('thumbnail')->store('products/thumbnails', 'public');
            }

            $product = Product::create($data);

            // Specifications
            foreach ($request->specifications ?? [] as $i => $spec) {
                if (!empty($spec['key'])) {
                    $product->specifications()->create([
                        'key' => $spec['key'],
                        'value' => $spec['value'],
                        'display_order' => $i,
                        'status' => 1,
                    ]);
                }
            }

            // Product Information
            foreach ($request->information ?? [] as $i => $info) {
                if (!empty($info['key'])) {
                    $product->information()->create([
                        'key' => $info['key'],
                        'value' => $info['value'],
                        'display_order' => $i,
                        'status' => 1,
                    ]);
                }
            }

            // Physical & Chemical Characteristics
            foreach ($request->characteristics ?? [] as $i => $char) {
                if (!empty($char['key'])) {
                    $product->physicalChemicalCharacteristics()->create([
                        'key' => $char['key'],
                        'value' => $char['value'],
                        'display_order' => $i,
                        'status' => 1,
                    ]);
                }
            }

        });

        return redirect()->route('products.index')
            ->with('success', 'Product created successfully.');
    }

    public function edit(Product $product)
    {
        return view('products.edit', [
            'product' => $product->load([
                'specifications',
                'information',
                'physicalChemicalCharacteristics',
            ]),
            'categories' => Category::where('status', 1)->get(),
        ]);
    }

    public function update(Request $request, Product $product)
    {
        DB::transaction(function () use ($request, $product) {

            $data = $request->validate([
                'title' => 'required|string|max:255',
                'description' => 'nullable|string',
                'category_id' => 'required|exists:categories,id',
                'other' => 'nullable|string',
                'packing' => 'nullable|string',
                'external_url' => 'nullable|url',
                'external_url_label' => 'nullable|string|max:255',
                'image' => 'nullable|image|max:2048',
                'thumbnail' => 'nullable|image|max:1024',
                'status' => 'required|boolean',
                'display_order' => 'nullable|integer|min:0',
            ]);

            if ($request->hasFile('image') && $product->image) {
                Storage::disk('public')->delete($product->image);
                $data['image'] = $request->file('image')->store('products', 'public');
            }

            if ($request->hasFile('thumbnail') && $product->thumbnail) {
                Storage::disk('public')->delete($product->thumbnail);
                $data['thumbnail'] = $request->file('thumbnail')->store('products/thumbnails', 'public');
            }


            $product->update($data);

            // Replace child data
            $product->specifications()->delete();
            $product->information()->delete();
            $product->physicalChemicalCharacteristics()->delete();

            foreach ($request->specifications ?? [] as $i => $spec) {
                if (!empty($spec['key'])) {
                    $product->specifications()->create([
                        'key' => $spec['key'],
                        'value' => $spec['value'],
                        'display_order' => $i,
                        'status' => 1,
                    ]);
                }
            }

            foreach ($request->information ?? [] as $i => $info) {
                if (!empty($info['key'])) {
                    $product->information()->create([
                        'key' => $info['key'],
                        'value' => $info['value'],
                        'display_order' => $i,
                        'status' => 1,
                    ]);
                }
            }

            foreach ($request->characteristics ?? [] as $i => $char) {
                if (!empty($char['key'])) {
                    $product->physicalChemicalCharacteristics()->create([
                        'key' => $char['key'],
                        'value' => $char['value'],
                        'display_order' => $i,
                        'status' => 1,
                    ]);
                }
            }

        });

        return redirect()->route('products.index')
            ->with('success', 'Product updated successfully.');
    }

    public function destroy(Product $product)
    {
        if ($product->image) {
            Storage::disk('public')->delete($product->image);
        }

        if ($product->thumbnail) {
            Storage::disk('public')->delete($product->thumbnail);
        }

        $product->delete();

        return redirect()
            ->route('products.index')
            ->with('success', 'Product deleted successfully.');
    }

}

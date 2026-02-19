@csrf
@if($category->exists)
    @method('PUT')
@endif

<x-form-errors />

<div class="space-y-4">

    <div>
        <label>Name</label>
        <input type="text" name="name"
               value="{{ old('name', $category->name) }}"
               class="w-full border rounded px-3 py-2" required>
    </div>

    <div>
        <label>Description</label>
        <textarea name="description" id="description-editor"
                  class="w-full border rounded px-3 py-2">{{ old('description', $category->description) }}</textarea>
    </div>

    <div>
        <label>Image</label>
        <input type="file" name="image">
    </div>

    <div>
        <label>Thumbnail</label>
        <input type="file" name="thumbnail">
    </div>

    <hr class="my-6">

    <h3 class="text-lg font-semibold mb-4">Category Detail Section</h3>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-6">

        {{-- Detail Image One --}}
        <div>
            <label class="block font-medium mb-1">Detail Image One</label>
            <input type="file" name="detail_image_one" class="w-full border rounded p-2">

            @if(isset($category) && $category->detail_image_one)
                <img src="{{ asset('storage/' . $category->detail_image_one) }}"
                    class="mt-2 h-24 rounded">
                <div class="mt-2">
                    <label class="inline-flex items-center">
                        <input type="checkbox"
                            name="remove_detail_image_one"
                            value="1"
                            class="mr-2">
                        Remove Image
                    </label>
                </div>
            @endif
        </div>

        {{-- Detail Image Two --}}
        <div>
            <label class="block font-medium mb-1">Detail Image Two</label>
            <input type="file" name="detail_image_two" class="w-full border rounded p-2">

            @if(isset($category) && $category->detail_image_two)
                <img src="{{ asset('storage/' . $category->detail_image_two) }}"
                    class="mt-2 h-24 rounded">
                <div class="mt-2">
                    <label class="inline-flex items-center">
                        <input type="checkbox"
                            name="remove_detail_image_two"
                            value="1"
                            class="mr-2">
                        Remove Image
                    </label>
                </div>
            @endif
        </div>

    </div>

    <div class="mt-6">
        <label class="block font-medium mb-1">Detail Content</label>
        <textarea required name="detail_content"
                rows="6"
                class="w-full border rounded p-2">{{ old('detail_content', $category->detail_content ?? '') }}</textarea>
    </div>

    <hr class="my-6">

    <h3 class="text-lg font-semibold mb-4">Products Section</h3>

    <div class="mb-4">
        <label class="block font-medium mb-1">Products Section Title</label>
        <input required type="text"
            name="products_section_title"
            value="{{ old('products_section_title', $category->products_section_title ?? '') }}"
            class="w-full border rounded p-2">
    </div>

    <div>
        <label class="block font-medium mb-1">Products Section Description</label>
        <textarea required name="products_section_description"
                rows="4"
                class="w-full border rounded p-2">{{ old('products_section_description', $category->products_section_description ?? '') }}</textarea>
    </div>


    <div>
        <label>Status</label>
        <select name="status" class="w-full border rounded px-3 py-2">
            <option value="1" @selected(old('status', $category->status) == 1)>Active</option>
            <option value="0" @selected(old('status', $category->status) == 0)>Inactive</option>
        </select>
    </div>

    <div class="flex items-center gap-2">
        <!-- Hidden input ensures 0 is sent when unchecked -->
        <input type="hidden" name="is_featured" value="0">

        <input type="checkbox"
            name="is_featured"
            value="1"
            @checked(old('is_featured', $category->is_featured ?? false))
            class="h-4 w-4">

        <label class="font-medium">Featured Category</label>
    </div>


    <div>
        <label>Display Order</label>
        <input type="number" name="display_order" required 
               value="{{ old('display_order', $category->display_order) }}"
               class="w-full border rounded px-3 py-2">
    </div>

</div>

<div class="mt-6">
    <button class="px-4 py-2 bg-indigo-600 text-white rounded">
        {{ $category->exists ? 'Update' : 'Create' }}
    </button>
</div>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        ClassicEditor
            .create(document.querySelector('#description-editor'))
            .catch(error => {
                console.error(error);
            });
    });
</script>

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

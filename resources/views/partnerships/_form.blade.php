@csrf
@if($partnership->exists) @method('PUT') @endif

<x-form-errors />

<div class="space-y-4">

    <div>
        <label class="block font-medium">Company Name</label>
        <input type="text"
               name="name"
               value="{{ old('name', $partnership->name) }}"
               class="w-full border rounded px-3 py-2"
               required>
    </div>

    <div>
        <label class="block font-medium">Description</label>
        <textarea name="description"
                  class="w-full border rounded px-3 py-2"
                  rows="3">{{ old('description', $partnership->description) }}</textarea>
    </div>

    <div>
        <label class="block font-medium">Company URL</label>
        <input type="url"
               name="url"
               value="{{ old('url', $partnership->url) }}"
               class="w-full border rounded px-3 py-2">
    </div>

    <div>
        <label class="block font-medium">Image</label>
        <input type="file" name="image">
    </div>

    <div>
        <label class="block font-medium">Thumbnail</label>
        <input type="file" name="thumbnail">
    </div>

    <div>
        <label class="block font-medium">Status</label>
        <select name="status" class="border rounded px-3 py-2">
            <option value="1" @selected(old('status', $partnership->status) == 1)>Active</option>
            <option value="0" @selected(old('status', $partnership->status) == 0)>Inactive</option>
        </select>
    </div>

    <div>
        <label class="block font-medium">Display Order</label>
        <input type="number"
               name="display_order" required 
               value="{{ old('display_order', $partnership->display_order) }}"
               class="border rounded px-3 py-2">
    </div>

</div>

<button class="mt-6 px-4 py-2 bg-indigo-600 text-white rounded">
    {{ $partnership->exists ? 'Update Partnership' : 'Create Partnership' }}
</button>

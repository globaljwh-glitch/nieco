@csrf
@if($service->exists) @method('PUT') @endif

<x-form-errors />

<div class="space-y-4">

    <div>
        <label class="block font-medium">Name</label>
        <input type="text"
               name="name"
               value="{{ old('name', $service->name) }}"
               class="w-full border rounded px-3 py-2"
               required>
    </div>

    <div>
        <label class="block font-medium">Description</label>
        <textarea name="description" id="description-editor"
                  class="w-full border rounded px-3 py-2"
                  rows="3">{{ old('description', $service->description) }}</textarea>
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
            <option value="1" @selected(old('status', $service->status) == 1)>Active</option>
            <option value="0" @selected(old('status', $service->status) == 0)>Inactive</option>
        </select>
    </div>

    <div>
        <label class="block font-medium">Display Order</label>
        <input type="number"
               name="display_order"
               value="{{ old('display_order', $service->display_order) }}"
               class="border rounded px-3 py-2">
    </div>

</div>

<button class="mt-6 px-4 py-2 bg-indigo-600 text-white rounded">
    {{ $service->exists ? 'Update Service' : 'Create Service' }}
</button>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        ClassicEditor
            .create(document.querySelector('#description-editor'))
            .catch(error => {
                console.error(error);
            });
    });
</script>
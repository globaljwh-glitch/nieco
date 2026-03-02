<div class="mb-4">
    <label class="block font-medium">Title</label>
    <input type="text" name="title"
           value="{{ old('title', $career->title ?? '') }}"
           class="w-full border rounded px-3 py-2" required>
</div>

<div class="mb-4">
    <label class="block font-medium">Department</label>
    <input type="text" name="department"
           value="{{ old('department', $career->department ?? '') }}"
           class="w-full border rounded px-3 py-2" required>
</div>

<div class="mb-4">
    <label class="block font-medium">Description</label>
    <textarea name="description" id="description-editor" 
              class="w-full border rounded px-3 py-2"
              rows="5"
              >{{ old('description', $career->description ?? '') }}</textarea>
</div>

<div class="mb-4">
    <label class="block font-medium">Status</label>
    <select name="status" class="w-full border rounded px-3 py-2">
        <option value="1" 
            {{ old('status', $career->status ?? 1) == 1 ? 'selected' : '' }}>
            Active
        </option>
        <option value="0"
            {{ old('status', $career->status ?? 1) == 0 ? 'selected' : '' }}>
            Inactive
        </option>
    </select>
</div>

<div>
    <button class="bg-blue-600 text-white px-4 py-2 rounded">
        Save
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
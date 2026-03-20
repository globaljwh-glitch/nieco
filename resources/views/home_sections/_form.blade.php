@csrf

<x-form-errors />

<div class="mb-4">
    <label class="block mb-1 font-medium">Section Key</label>
    <select name="section_key"
            class="w-full border rounded px-3 py-2"
            required
            {{ isset($homeSection) ? 'disabled' : '' }}>

        <option value="">-- Select Section --</option>

        @foreach($sectionKeys as $key => $label)
            <option value="{{ $key }}"
                {{ old('section_key', $homeSection->section_key ?? '') == $key ? 'selected' : '' }}>
                {{ $label }}
            </option>
        @endforeach

    </select>

    {{-- If editing, keep value hidden --}}
    @if(isset($homeSection))
        <input type="hidden" name="section_key" value="{{ $homeSection->section_key }}">
    @endif
</div>

<div class="mb-4">
    <label class="block mb-1">Title</label>
    <input type="text"
           name="title"
           value="{{ old('title', $homeSection->title ?? '') }}"
           class="w-full border rounded px-3 py-2">
</div>

<div class="mb-4">
    <label class="block mb-1">Subtitle</label>
    <input type="text"
           name="subtitle"
           value="{{ old('subtitle', $homeSection->subtitle ?? '') }}"
           class="w-full border rounded px-3 py-2">
</div>

<div class="mb-4">
    <label class="block mb-1">Content</label>
    <textarea name="content" id="description-editor"
              rows="5"
              class="w-full border rounded px-3 py-2">{{ old('content', $homeSection->content ?? '') }}</textarea>
</div>

<div class="mb-4">
    <label class="block mb-1">Images</label>
    <input type="file"
           name="images[]"
           multiple
           class="w-full">
</div>

{{-- Show Existing Images --}}
@if(isset($homeSection) && !empty($homeSection->images))
    <div class="mb-4">
        <label class="block mb-2 font-medium">Existing Images</label>

        <div class="flex flex-wrap gap-4">
            <!-- @foreach($homeSection->images as $img)
                <div class="relative">
                    <img src="{{ Storage::url($img) }}"
                         class="w-32 h-32 object-cover border rounded">

                    {{-- future: delete button here --}}
                </div>
            @endforeach -->
            @foreach($homeSection->images as $img)
                <div class="relative border p-2 rounded">

                    <img src="{{ Storage::url($img) }}"
                        class="w-32 h-32 object-cover mb-2">

                    <label class="text-red-600 text-sm">
                        <input type="checkbox"
                            name="remove_images[]"
                            value="{{ $img }}">
                        Remove
                    </label>
                </div>
            @endforeach

        </div>
    </div>
@endif

<div class="mb-4">
    <label class="block mb-1">Display Order</label>
    <input type="number"
           name="display_order"
           value="{{ old('display_order', $homeSection->display_order ?? 0) }}"
           class="w-full border rounded px-3 py-2">
</div>

<div class="mb-4">
    <label class="inline-flex items-center">
        <input type="checkbox"
               name="status"
               value="1"
               {{ old('status', $homeSection->status ?? 1) ? 'checked' : '' }}>
        <span class="ml-2">Active</span>
    </label>
</div>

<div class="text-right">
    <button type="submit"
            class="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
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

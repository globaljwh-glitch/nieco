@csrf
@if($event->exists) @method('PUT') @endif

<x-form-errors />

<div class="space-y-4">

    <div>
        <label class="block font-medium">Event Name</label>
        <input type="text"
               name="event_name"
               value="{{ old('event_name', $event->event_name) }}"
               class="w-full border rounded px-3 py-2"
               required>
    </div>

    <!-- <div>
        <label class="block font-medium">Event Start Date</label>
        <input type="date"
               name="event_date"
               value="{{ old('event_date', optional($event->event_date)->format('Y-m-d')) }}"
               class="border rounded px-3 py-2"
               required>
    </div>

    <div>
        <label class="block font-medium">Event End Date</label>
        <input type="date"
               name="event_end_date"
               value="{{ old('event_end_date', optional($event->event_end_date)->format('Y-m-d')) }}"
               class="border rounded px-3 py-2"
               required>
    </div> -->

    <div>
        <label class="block font-medium">Event Start Date</label>
        <input type="date"
            name="event_date"
            min="{{ now()->format('Y-m-d') }}"
            value="{{ old('event_date', optional($event->event_date)->format('Y-m-d')) }}"
            class="border rounded px-3 py-2"
            required>
    </div>

    <div>
        <label class="block font-medium">Event End Date</label>
        <input type="date"
            name="event_end_date"
            min="{{ now()->format('Y-m-d') }}"
            value="{{ old('event_end_date', optional($event->event_end_date)->format('Y-m-d')) }}"
            class="border rounded px-3 py-2"
            required>
    </div>

    <div>
        <label class="block font-medium">Description</label>
        <textarea name="description" id="description-editor" 
                  class="w-full border rounded px-3 py-2"
                  rows="3">{{ old('description', $event->description) }}</textarea>
    </div>

    <div>
        <label class="block font-medium">URL</label>
        <input type="url"
               name="url"
               value="{{ old('url', $event->url) }}"
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
        <select name="status" class="w-full border rounded px-3 py-2">
            <option value="1" @selected(old('status', $event->status) == 1)>Active</option>
            <option value="0" @selected(old('status', $event->status) == 0)>Inactive</option>
        </select>
    </div>

    <div>
        <label class="block font-medium">Display Order</label>
        <input type="number"
               name="display_order" required 
               value="{{ old('display_order', $event->display_order) }}"
               class="border rounded px-3 py-2">
    </div>

</div>

<button class="mt-6 px-4 py-2 bg-indigo-600 text-white rounded">
    {{ $event->exists ? 'Update Event' : 'Create Event' }}
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

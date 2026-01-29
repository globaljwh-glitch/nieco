@csrf

@if($setting->exists)
    @method('PUT')
@endif

<div class="space-y-4">

    <div>
        <label class="block text-sm font-medium text-gray-700">
            Key
        </label>
        @if($setting->exists)
            {{-- Edit mode: locked --}}
            <input type="text"
                value="{{ old('key', $setting->key) }}"
                class="mt-1 block w-full rounded border-gray-300 bg-gray-100"
                disabled>

            <input type="hidden"
                name="key"
                value="{{ old('key', $setting->key) }}">

            <p class="text-xs text-gray-500 mt-1">
                Key cannot be changed once created.
            </p>
        @else
            {{-- Create mode: editable --}}
            <input type="text"
                name="key"
                value="{{ old('key') }}"
                class="mt-1 block w-full rounded border-gray-300"
                required>
            <p class="text-xs text-gray-500 mt-1">
                Key cannot be changed once created.
            </p>
        @endif
    </div>

    <div>
        <label class="block text-sm font-medium text-gray-700">
            Value
        </label>
        <textarea name="value"
                  rows="4"
                  class="mt-1 block w-full rounded border-gray-300">{{ old('value', $setting->value) }}</textarea>
    </div>

    <div>
        <label class="block text-sm font-medium text-gray-700">
            Status
        </label>
        <select name="status"
                class="mt-1 block w-full rounded border-gray-300">
            <option value="1" @selected(old('status', $setting->status) == 1)>
                Active
            </option>
            <option value="0" @selected(old('status', $setting->status) == 0)>
                Inactive
            </option>
        </select>
    </div>

</div>

<div class="mt-6 flex gap-3">
    <button type="submit"
            class="px-4 py-2 bg-indigo-600 text-white rounded">
        {{ $setting->exists ? 'Update' : 'Create' }}
    </button>

    <a href="{{ route('settings.index') }}"
       class="px-4 py-2 bg-gray-200 rounded">
        Cancel
    </a>
</div>

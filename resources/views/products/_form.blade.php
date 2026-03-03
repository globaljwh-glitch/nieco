@csrf
@if($product->exists)
    @method('PUT')
@endif

<x-form-errors />

<div class="space-y-4">

    <div>
        <label class="block font-medium">Title</label>
        <input type="text"
               name="title"
               value="{{ old('title', $product->title) }}"
               class="w-full border rounded px-3 py-2"
               required>
    </div>

    <div>
        <label class="block font-medium">Category</label>
        <select name="category_id"
                class="w-full border rounded px-3 py-2"
                required>
            @foreach($categories as $category)
                <option value="{{ $category->id }}"
                    @selected(old('category_id', $product->category_id) == $category->id)>
                    {{ $category->name }}
                </option>
            @endforeach
        </select>
    </div>

    <div class="flex items-center gap-2">
        <input type="hidden" name="is_featured" value="0">

        <input type="checkbox"
            name="is_featured"
            value="1"
            @checked(old('is_featured', $product->is_featured ?? false))
            class="h-4 w-4">

        <label class="font-medium">Featured Product</label>
    </div>

    <div>
        <label class="block font-medium">Description</label>
        <textarea name="description" id="description-editor"
                  class="w-full border rounded px-3 py-2"
                  rows="3">{{ old('description', $product->description) }}</textarea>
    </div>

    <div>
        <label class="block font-medium">Packing Option</label>
        <textarea name="packing" id="packing-editor"
                class="w-full border rounded px-3 py-2"
                rows="3">{{ old('packing', $product->packing) }}</textarea>
    </div>

    <div>
        <label class="block font-medium">Other</label>
        <textarea name="other" id="other-editor" 
                class="w-full border rounded px-3 py-2"
                rows="3">{{ old('other', $product->other) }}</textarea>
    </div>

    <div class="grid grid-cols-2 gap-4">
        <div>
            <label class="block font-medium">External URL</label>
            <input type="url"
                name="external_url"
                value="{{ old('external_url', $product->external_url) }}"
                class="w-full border rounded px-3 py-2">
        </div>

        <div>
            <label class="block font-medium">External URL Label</label>
            <input type="text"
                name="external_url_label"
                value="{{ old('external_url_label', $product->external_url_label) }}"
                class="w-full border rounded px-3 py-2">
        </div>
    </div>


    <div>
        <label class="block font-medium">Image</label>
        <input type="file" name="image">
    </div>

    <div>
        <label class="block font-medium">Thumbnail</label>
        <input type="file" name="thumbnail">
    </div>

    {{-- Specifications --}}
    <div>
        <h3 class="font-semibold mb-2">Specifications</h3>

        <div id="specifications">
            @foreach(old('specifications', $product->specifications->toArray()) as $i => $spec)
                <div class="flex gap-2 mb-2">
                    <input name="specifications[{{ $i }}][key]"
                           value="{{ $spec['key'] ?? '' }}"
                           placeholder="Key"
                           class="border px-2 py-1">

                    <input name="specifications[{{ $i }}][value]"
                           value="{{ $spec['value'] ?? '' }}"
                           placeholder="Value"
                           class="border px-2 py-1">

                    <button type="button"
                            onclick="this.parentNode.remove()"
                            class="text-red-600">
                        ✕
                    </button>
                </div>
            @endforeach
        </div>

        <button type="button"
                onclick="addSpec()"
                class="text-indigo-600 mt-2">
            + Add Specification
        </button>
    </div>

    {{-- Product Information --}}
    <div class="mt-6">
        <h3 class="font-semibold mb-2">Product Information</h3>

        <div id="information">
            @foreach(old('information', $product->information->toArray()) as $i => $info)
                <div class="flex gap-2 mb-2">
                    <input name="information[{{ $i }}][key]"
                        value="{{ $info['key'] ?? '' }}"
                        placeholder="Key"
                        class="border px-2 py-1">

                    <input name="information[{{ $i }}][value]"
                        value="{{ $info['value'] ?? '' }}"
                        placeholder="Value"
                        class="border px-2 py-1">

                    <button type="button"
                            onclick="this.parentNode.remove()"
                            class="text-red-600">
                        ✕
                    </button>
                </div>
            @endforeach
        </div>

        <button type="button"
                onclick="addInfo()"
                class="text-indigo-600 mt-2">
            + Add Information
        </button>
    </div>

    <div class="mt-6">
        <h3 class="font-semibold mb-2">
            Physical & Chemical Characteristics
        </h3>

        <div id="characteristics">
            @foreach(old('characteristics', $product->physicalChemicalCharacteristics->toArray()) as $i => $char)
                <div class="flex gap-2 mb-2">
                    <input name="characteristics[{{ $i }}][key]"
                        value="{{ $char['key'] ?? '' }}"
                        placeholder="Key"
                        class="border px-2 py-1">

                    <input name="characteristics[{{ $i }}][value]"
                        value="{{ $char['value'] ?? '' }}"
                        placeholder="Value"
                        class="border px-2 py-1">

                    <button type="button"
                            onclick="this.parentNode.remove()"
                            class="text-red-600">✕</button>
                </div>
            @endforeach
        </div>

        <button type="button"
                onclick="addCharacteristic()"
                class="text-indigo-600 mt-2">
            + Add Characteristic
        </button>
    </div>

    <div>
        <label class="block font-medium">Status</label>
        <select name="status" class="w-full border rounded px-3 py-2">
            <option value="1" @selected(old('status', $product->status) == 1)>Active</option>
            <option value="0" @selected(old('status', $product->status) == 0)>Inactive</option>
        </select>
    </div>

    <div>
        <label class="block font-medium">Display Order</label>
        <input type="number"
               name="display_order" required 
               value="{{ old('display_order', $product->display_order) }}"
               class="border rounded px-3 py-2">
    </div>

</div>

<button class="mt-6 px-4 py-2 bg-indigo-600 text-white rounded">
    {{ $product->exists ? 'Update Product' : 'Create Product' }}
</button>

<script>
let specIndex = {{ count(old('specifications', $product->specifications)) }};

function addSpec() {
    document.getElementById('specifications').insertAdjacentHTML('beforeend', `
        <div class="flex gap-2 mb-2">
            <input required name="specifications[${specIndex}][key]" class="border px-2 py-1" placeholder="Key">
            <input required name="specifications[${specIndex}][value]" class="border px-2 py-1" placeholder="Value">
            <button type="button" onclick="this.parentNode.remove()" class="text-red-600">✕</button>
        </div>
    `);
    specIndex++;
}
</script>

<script>
let infoIndex = {{ count(old('information', $product->information)) }};

function addInfo() {
    document.getElementById('information').insertAdjacentHTML('beforeend', `
        <div class="flex gap-2 mb-2">
            <input required name="information[${infoIndex}][key]" class="border px-2 py-1" placeholder="Key">
            <input required name="information[${infoIndex}][value]" class="border px-2 py-1" placeholder="Value">
            <button type="button" onclick="this.parentNode.remove()" class="text-red-600">✕</button>
        </div>
    `);
    infoIndex++;
}
</script>

<script>
let characteristicIndex = {{ count(old('characteristics', $product->physicalChemicalCharacteristics)) }};

function addCharacteristic() {
    document.getElementById('characteristics').insertAdjacentHTML('beforeend', `
        <div class="flex gap-2 mb-2">
            <input required name="characteristics[${characteristicIndex}][key]" class="border px-2 py-1" placeholder="Key">
            <input required name="characteristics[${characteristicIndex}][value]" class="border px-2 py-1" placeholder="Value">
            <button type="button" onclick="this.parentNode.remove()" class="text-red-600">✕</button>
        </div>
    `);
    characteristicIndex++;
}
</script>

<script>
    document.addEventListener('DOMContentLoaded', function () {
        ClassicEditor
            .create(document.querySelector('#description-editor'))
            .catch(error => {
                console.error(error);
            });
    });

    document.addEventListener('DOMContentLoaded', function () {
        ClassicEditor
            .create(document.querySelector('#other-editor'))
            .catch(error => {
                console.error(error);
            });
    });

    document.addEventListener('DOMContentLoaded', function () {
        ClassicEditor
            .create(document.querySelector('#packing-editor'))
            .catch(error => {
                console.error(error);
            });
    });
</script>



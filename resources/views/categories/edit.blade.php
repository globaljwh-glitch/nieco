<x-app-layout>
    <x-slot name="header">Edit Category</x-slot>

    <div class="py-12 max-w-4xl mx-auto">
        <div class="bg-white p-6 shadow rounded">
            <form method="POST"
                  action="{{ route('categories.update', $category) }}"
                  enctype="multipart/form-data">
                @include('categories._form')
            </form>
        </div>
    </div>
</x-app-layout>

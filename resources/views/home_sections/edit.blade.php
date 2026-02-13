<x-app-layout>
    <x-slot name="header">
        <h2>Edit Home Section</h2>
    </x-slot>

    <div class="max-w-3xl mx-auto p-6">
        <form method="POST"
              action="{{ route('home-sections.update', $homeSection->id) }}"
              enctype="multipart/form-data">

            @method('PUT')

            @include('home_sections._form')

        </form>
    </div>
</x-app-layout>

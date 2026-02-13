<x-app-layout>
    <x-slot name="header">
        <h2>Create Home Section</h2>
    </x-slot>

    <div class="max-w-3xl mx-auto p-6">
        <form method="POST"
              action="{{ route('home-sections.store') }}"
              enctype="multipart/form-data">

            @include('home_sections._form')

        </form>
    </div>
</x-app-layout>

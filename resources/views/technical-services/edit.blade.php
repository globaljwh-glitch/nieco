<x-app-layout>
    <x-slot name="header">Edit Technical Service</x-slot>

    <div class="py-12 max-w-4xl mx-auto">
        <div class="bg-white p-6 shadow rounded">
            <form method="POST"
                  action="{{ route('technical-services.update', $service) }}"
                  enctype="multipart/form-data">
                @include('technical-services._form')
            </form>
        </div>
    </div>
</x-app-layout>

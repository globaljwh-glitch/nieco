<x-app-layout>
    <x-slot name="header">Create Event</x-slot>

    <div class="py-12 max-w-4xl mx-auto">
        <div class="bg-white p-6 shadow rounded">
            <form method="POST"
                  action="{{ route('events.store') }}"
                  enctype="multipart/form-data">
                @include('events._form')
            </form>
        </div>
    </div>
</x-app-layout>

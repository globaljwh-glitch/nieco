<x-app-layout>
    <x-slot name="header">Create Partnership</x-slot>

    <div class="py-12 max-w-4xl mx-auto">
        <div class="bg-white p-6 shadow rounded">
            <form method="POST"
                  action="{{ route('partnerships.store') }}"
                  enctype="multipart/form-data">
                @include('partnerships._form')
            </form>
        </div>
    </div>
</x-app-layout>

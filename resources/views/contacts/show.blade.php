<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800">
            Contact Details
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-4xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white shadow rounded p-6 space-y-4">

                <div>
                    <strong>Name:</strong> {{ $contact->name }}
                </div>

                <div>
                    <strong>Email:</strong> {{ $contact->email }}
                </div>

                <div>
                    <strong>Phone:</strong>
                    {{ $contact->country_code }} {{ $contact->phone }}
                </div>

                <div>
                    <strong>Address:</strong><br>
                    {{ $contact->street }}<br>
                    {{ $contact->city }}, {{ $contact->state }} {{ $contact->zip_code }}<br>
                    {{ $contact->country }}
                </div>

                <div>
                    <strong>Subject:</strong> {{ $contact->subject }}
                </div>

                <div>
                    <strong>Message:</strong>
                    <p class="mt-2 whitespace-pre-line text-gray-700">
                        {{ $contact->message }}
                    </p>
                </div>

                <div class="pt-4">
                    <a href="{{ route('contacts.index') }}"
                       class="px-4 py-2 bg-gray-200 rounded">
                        Back to List
                    </a>
                </div>

            </div>
        </div>
    </div>
</x-app-layout>

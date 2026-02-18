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
                    <strong>First Name:</strong> {{ $contact->name }}
                </div>

                <div>
                    <strong>Last Name:</strong> {{ $contact->last_name }}
                </div>

                <div>
                    <strong>Email:</strong> {{ $contact->email }}
                </div>

                <div>
                    <strong>Phone:</strong>
                    {{ $contact->phone }}
                </div>

                <div>
                    <strong>Company Name:</strong>
                    {{ $contact->company_name }}
                </div>

                <div>
                    <strong>Address:</strong><br>
                    {{ $contact->street }}<br>
                    {{ $contact->city }}, {{ $contact->state }} {{ $contact->zip_code }}<br>
                    {{ $contact->country }}
                </div>

                <div>
                    <strong>Application and Use of Product:</strong> {{ $contact->use_of_product }}
                </div>

                <div>
                    <strong>What products are you interested in?:</strong>
                    <p class="mt-2 whitespace-pre-line text-gray-700">
                        {{ $contact->interested_in }}
                    </p>
                </div>

                <div>
                    <strong>Final application?:</strong>
                    <p class="mt-2 whitespace-pre-line text-gray-700">
                        {{ $contact->final_application }}
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

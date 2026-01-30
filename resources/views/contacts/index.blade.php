<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800">
            Contacts
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white shadow rounded p-6">

                <table class="min-w-full border">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-4 py-2 text-left">Name</th>
                            <th class="px-4 py-2 text-left">Email</th>
                            <th class="px-4 py-2 text-left">Subject</th>
                            <th class="px-4 py-2 text-left">Date</th>
                            <th class="px-4 py-2 text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($contacts as $contact)
                            <tr class="border-t">
                                <td class="px-4 py-2">{{ $contact->name }}</td>
                                <td class="px-4 py-2">{{ $contact->email }}</td>
                                <td class="px-4 py-2">{{ $contact->subject }}</td>
                                <td class="px-4 py-2">{{ $contact->created_at->format('d M Y') }}</td>
                                <td class="px-4 py-2 text-center">
                                    <a href="{{ route('contacts.show', $contact) }}"
                                       class="text-indigo-600 hover:underline">
                                        View
                                    </a>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5" class="px-4 py-6 text-center text-gray-500">
                                    No contacts found.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>

                <div class="mt-4">
                    {{ $contacts->links() }}
                </div>

            </div>
        </div>
    </div>
</x-app-layout>

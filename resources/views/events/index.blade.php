<x-app-layout>
    <x-slot name="header">
        <h2 class="text-xl font-semibold">Events</h2>
    </x-slot>

    <div class="py-12 max-w-7xl mx-auto">
        <div class="bg-white p-6 shadow rounded">

            @if(session('success'))
                <div class="mb-4 text-green-700 bg-green-100 p-3 rounded">
                    {{ session('success') }}
                </div>
            @endif

            <div class="flex justify-between mb-4">
                <form method="GET">
                    <input type="text"
                           name="search"
                           value="{{ request('search') }}"
                           placeholder="Search events..."
                           class="border rounded px-3 py-2">

                    @if(request()->filled('search'))
                        <a href="{{ route('events.index') }}"
                           class="ml-2 text-sm text-gray-600">Clear</a>
                    @endif
                </form>

                <a href="{{ route('events.create') }}"
                   class="px-4 py-2 bg-indigo-600 text-white rounded">
                    Add Event
                </a>
            </div>

            <table class="w-full border">
                <thead class="bg-gray-100 text-left">
                    <tr>
                        <th class="px-4 py-2">Event</th>
                        <th class="px-4 py-2">Date</th>
                        <th class="px-4 py-2">Status</th>
                        <th class="px-4 py-2">Order</th>
                        <th class="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($events as $event)
                        <tr class="border-t">
                            <td class="px-4 py-2">{{ $event->event_name }}</td>
                            <td class="px-4 py-2">
                                {{ $event->event_date->format('d M Y') }}
                            </td>
                            <td class="px-4 py-2">
                                {{ $event->status ? 'Active' : 'Inactive' }}
                            </td>
                            <td class="px-4 py-2">{{ $event->display_order }}</td>
                            <td class="px-4 py-2">
                                <div class="flex gap-3">
                                    <a href="{{ route('events.edit', $event) }}"
                                       class="text-indigo-600">Edit</a>

                                    <form method="POST"
                                          action="{{ route('events.destroy', $event) }}"
                                          onsubmit="return confirm('Are you sure?')">
                                        @csrf
                                        @method('DELETE')
                                        <button class="text-red-600">Delete</button>
                                    </form>
                                </div>
                            </td>
                        </tr>
                    @empty
                        <tr>
                            <td colspan="5"
                                class="text-center py-6 text-gray-500">
                                No events found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>

            <div class="mt-4">
                {{ $events->links() }}
            </div>

        </div>
    </div>
</x-app-layout>

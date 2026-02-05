<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl">Technical Services</h2>
    </x-slot>

    <div class="py-12 max-w-7xl mx-auto">
        <div class="bg-white p-6 shadow rounded">

            @if(session('success'))
                <div class="mb-4 text-green-700 bg-green-100 p-3 rounded">
                    {{ session('success') }}
                </div>
            @endif

            <div class="flex justify-end mb-4">
                <a href="{{ route('technical-services.create') }}"
                   class="px-4 py-2 bg-indigo-600 text-white rounded">
                    Add Service
                </a>
            </div>

            <table class="min-w-full border">
                <thead class="bg-gray-100 text-left">
                    <tr>
                        <th class="px-4 py-2">Name</th>
                        <th class="px-4 py-2">Status</th>
                        <th class="px-4 py-2">Order</th>
                        <th class="px-4 py-2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @forelse($services as $service)
                        <tr class="border-t">
                            <td class="px-4 py-2">{{ $service->name }}</td>
                            <td class="px-4 py-2">
                                {{ $service->status ? 'Active' : 'Inactive' }}
                            </td>
                            <td class="px-4 py-2">{{ $service->display_order }}</td>
                            <td class="px-4 py-2">
                                <div class="flex gap-3">
                                    <a href="{{ route('technical-services.edit', $service) }}"
                                       class="text-indigo-600">Edit</a>

                                    <form method="POST"
                                          action="{{ route('technical-services.destroy', $service) }}"
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
                            <td colspan="4"
                                class="text-center py-6 text-gray-500">
                                No technical services found.
                            </td>
                        </tr>
                    @endforelse
                </tbody>
            </table>

            <div class="mt-4">
                {{ $services->links() }}
            </div>
        </div>
    </div>
</x-app-layout>

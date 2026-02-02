<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800">
            Categories
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white p-6 shadow rounded">

                <div class="flex justify-between mb-4">
                    <form method="GET">
                        <input type="text"
                               name="search"
                               value="{{ request('search') }}"
                               placeholder="Search category..."
                               class="border rounded px-3 py-2">
                        @if(request()->filled('search'))
                            <a href="{{ route('categories.index') }}"
                            class="px-3 py-2 bg-gray-200 rounded text-sm">
                                Clear
                            </a>
                        @endif
                    </form>

                    <a href="{{ route('categories.create') }}"
                       class="px-4 py-2 bg-indigo-600 text-white rounded">
                        Add Category
                    </a>
                </div>
                @if(session('success'))
                    <div class="mb-4 text-green-700 bg-green-100 border border-green-300 rounded p-3">
                        {{ session('success') }}
                    </div>
                @endif
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
                        @forelse($categories as $category)
                            <tr class="border-t">
                                <td class="px-4 py-2">{{ $category->name }}</td>
                                <td class="px-4 py-2">
                                    {{ $category->status ? 'Active' : 'Inactive' }}
                                </td>
                                <td class="px-4 py-2">{{ $category->display_order }}</td>
                                <td class="px-4 py-2">
                                    <div class="flex items-center gap-3">
                                        <a href="{{ route('categories.edit', $category) }}"
                                        class="text-indigo-600">
                                            Edit
                                        </a>

                                        <form method="POST"
                                            action="{{ route('categories.destroy', $category) }}"
                                            onsubmit="return confirm('Are you sure you want to delete this category?')">
                                            @csrf
                                            @method('DELETE')

                                            <button type="submit" class="text-red-600">
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="4" class="px-4 py-8 text-center text-gray-500">
                                    @if(request()->filled('search'))
                                        No categories found for
                                        <strong>"{{ request('search') }}"</strong>.
                                    @else
                                        No categories found.
                                    @endif
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>

                <div class="mt-4">
                    {{ $categories->links() }}
                </div>

            </div>
        </div>
    </div>
</x-app-layout>

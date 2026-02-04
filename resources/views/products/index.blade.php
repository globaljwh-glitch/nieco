<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800">
            Products
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white p-6 shadow rounded">

                @if(session('success'))
                    <div class="mb-4 text-green-700 bg-green-100 border border-green-300 rounded p-3">
                        {{ session('success') }}
                    </div>
                @endif

                <div class="flex justify-between mb-4">
                    <form method="GET">
                        <input type="text"
                               name="search"
                               value="{{ request('search') }}"
                               placeholder="Search product..."
                               class="border rounded px-3 py-2">
                        @if(request()->filled('search'))
                            <a href="{{ route('products.index') }}"
                            class="px-3 py-2 bg-gray-200 rounded text-sm">
                                Clear
                            </a>
                        @endif
                    </form>

                    <a href="{{ route('products.create') }}"
                       class="px-4 py-2 bg-indigo-600 text-white rounded">
                        Add Product
                    </a>
                </div>

                <table class="min-w-full border">
                    <thead class="bg-gray-100">
                        <tr>
                            <th class="px-4 py-2 text-left">Title</th>
                            <th class="px-4 py-2 text-left">Category</th>
                            <th class="px-4 py-2 text-left">Status</th>
                            <th class="px-4 py-2 text-left">Order</th>
                            <th class="px-4 py-2 text-left">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        @forelse($products as $product)
                            <tr class="border-t">
                                <td class="px-4 py-2">{{ $product->title }}</td>
                                <td class="px-4 py-2">
                                    {{ $product->category?->name ?? '-' }}
                                </td>
                                <td class="px-4 py-2">
                                    {{ $product->status ? 'Active' : 'Inactive' }}
                                </td>
                                <td class="px-4 py-2">{{ $product->display_order }}</td>
                                <td class="px-4 py-2">
                                    <div class="flex items-center gap-3">
                                        <a href="{{ route('products.edit', $product) }}"
                                           class="text-indigo-600">
                                            Edit
                                        </a>

                                        <form method="POST"
                                              action="{{ route('products.destroy', $product) }}"
                                              onsubmit="return confirm('Are you sure?')">
                                            @csrf
                                            @method('DELETE')
                                            <button class="text-red-600">
                                                Delete
                                            </button>
                                        </form>
                                    </div>
                                </td>
                            </tr>
                        @empty
                            <tr>
                                <td colspan="5"
                                    class="px-4 py-8 text-center text-gray-500">
                                    No products found.
                                </td>
                            </tr>
                        @endforelse
                    </tbody>
                </table>

                <div class="mt-4">
                    {{ $products->links() }}
                </div>

            </div>
        </div>
    </div>
</x-app-layout>

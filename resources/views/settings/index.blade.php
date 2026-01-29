<x-app-layout>
    <x-slot name="header">
        <h2 class="font-semibold text-xl text-gray-800 leading-tight">
            {{ __('Settings') }}
        </h2>
    </x-slot>

    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg p-6">

                <div class="flex justify-between mb-4">
                    <h3 class="text-lg font-semibold">Settings List</h3>
                    <a href="{{ route('settings.create') }}"
                       class="px-4 py-2 bg-indigo-600 text-white rounded">
                        Add Setting
                    </a>
                </div>

                @if(session('success'))
                    <div class="mb-4 text-green-600">
                        {{ session('success') }}
                    </div>
                @endif

                <table class="min-w-full border">
                    <thead>
                        <tr class="bg-gray-100">
                            <th class="px-4 py-2 text-left">Key</th>
                            <th class="px-4 py-2 text-left">Value</th>
                            <th class="px-4 py-2 text-left">Status</th>
                            <th class="px-4 py-2">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        @foreach($settings as $setting)
                            <tr class="border-t">
                                <td class="px-4 py-2">{{ $setting->key }}</td>
                                <td class="px-4 py-2">{{ Str::limit($setting->value, 40) }}</td>
                                <td class="px-4 py-2">
                                    <span class="px-2 py-1 text-sm rounded
                                        {{ $setting->status ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600' }}">
                                        {{ $setting->status ? 'Active' : 'Inactive' }}
                                    </span>
                                </td>
                                <td class="px-4 py-2 text-center">
                                    <a href="{{ route('settings.edit', $setting) }}"
                                       class="text-indigo-600 mr-2">Edit</a>

                                    <form action="{{ route('settings.destroy', $setting) }}"
                                          method="POST"
                                          class="inline">
                                        @csrf
                                        @method('DELETE')
                                        <button class="text-red-600"
                                                onclick="return confirm('Are you sure?')">
                                            Delete
                                        </button>
                                    </form>
                                </td>
                            </tr>
                        @endforeach
                    </tbody>
                </table>

            </div>
        </div>
    </div>
</x-app-layout>

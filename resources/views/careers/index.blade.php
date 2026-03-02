<x-app-layout>
    <div class="py-6">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">

            <div class="flex justify-between mb-4">
                <h2 class="text-xl font-semibold">Jobs</h2>
                <a href="{{ route('careers.create') }}" 
                   class="bg-blue-600 text-white px-4 py-2 rounded">
                   Add Job
                </a>
            </div>

            @if(session('success'))
                <div class="bg-green-200 p-3 rounded mb-4">
                    {{ session('success') }}
                </div>
            @endif

            <table class="w-full border">
                <thead>
                    <tr class="bg-gray-100">
                        <th class="p-2 border">Title</th>
                        <th class="p-2 border">Department</th>
                        <th class="p-2 border">Status</th>
                        <th class="p-2 border">Action</th>
                    </tr>
                </thead>
                <tbody>
                    @foreach($careers as $job)
                        <tr>
                            <td class="p-2 border">{{ $job->title }}</td>
                            <td class="p-2 border">{{ $job->department }}</td>
                            <td class="p-2 border">
                                {{ $job->status ? 'Active' : 'Inactive' }}
                            </td>
                            <td class="p-2 border">
                                <a href="{{ route('careers.edit', $job) }}" 
                                   class="text-blue-600">Edit</a>

                                <form action="{{ route('careers.destroy', $job) }}" 
                                      method="POST" 
                                      class="inline">
                                    @csrf
                                    @method('DELETE')
                                    <button class="text-red-600 ml-2"
                                            onclick="return confirm('Delete?')">
                                        Delete
                                    </button>
                                </form>
                            </td>
                        </tr>
                    @endforeach
                </tbody>
            </table>

            <div class="mt-4">
                {{ $careers->links() }}
            </div>

        </div>
    </div>
</x-app-layout>
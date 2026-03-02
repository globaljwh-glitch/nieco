<x-app-layout>
    <div class="py-6 max-w-4xl mx-auto">
        <h2 class="text-xl font-semibold mb-4">Edit Job</h2>

        <form action="{{ route('careers.update', $career) }}" method="POST">
            @csrf
            @method('PUT')
            @include('careers._form')
        </form>
    </div>
</x-app-layout>
<x-app-layout>
    <div class="py-6 max-w-4xl mx-auto">
        <h2 class="text-xl font-semibold mb-4">Create Job</h2>

        <form action="{{ route('careers.store') }}" method="POST">
            @csrf
            @include('careers._form')
        </form>
    </div>
</x-app-layout>
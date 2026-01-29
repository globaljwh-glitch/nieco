@if ($errors->any())
    <div class="mb-4 rounded border border-red-300 bg-red-50 p-4 text-red-700">
        <ul class="list-disc pl-5 space-y-1 text-sm">
            @foreach ($errors->all() as $error)
                <li>{{ $error }}</li>
            @endforeach
        </ul>
    </div>
@endif

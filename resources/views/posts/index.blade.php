<x-app-layout>
    <x-slot name="title">トップページ</x-slot>
        
        <h1 class='text-2xl'>Blog Name</h1>
        <div class='posts'>
            @foreach ($posts as $post)
                <div class='post'>
                    <h2 class='title'>{{ $post->title }}</h2>
                    <p class='body'>{{ $post->body }}</p>
                </div>
            @endforeach
        </div>
        <div class='paginate'>
            {{ $posts->links() }}
        </div>
</x-app-layout>
<!DOCTYPE html>
<html>
<head>
    @viteReactRefresh
    @vite('resources/js/app.jsx')
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
    <link href="https://fonts.cdnfonts.com/css/kepler-std-3" rel="stylesheet">

    <!-- Line 1: Favicon -->
    <!-- <link rel="icon" type="image/x-icon" href="{{ asset('favicon.ico') }}"> -->
    <link rel="icon" href="{{ asset('images/favicon.ico') }}">
    
    <!-- Line 2: Dynamic Title -->
    <!-- <title>@yield('title', config('app.name'))</title> -->
    <title>Your Partner in Advanced Ingredient Solutions</title>

<meta property="og:title" content="NEICO" />
<meta property="og:description" content="Your Partner in Advanced Ingredient Solutions" />
<meta property="og:image" content="https://neico.com/images/neico_logo.png" />
<meta property="og:type" content="website" />

<meta property="og:site_name" content="NEICO" />
<meta name="twitter:card" content="Your Partner in Advanced Ingredient Solutions" />
</head>
<body>
    <div id="app"></div>
</body>
</html>

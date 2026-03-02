<nav x-data="{ open: false }" class="bg-white border-b border-gray-100">
    <!-- Primary Navigation Menu -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
            <div class="flex space-x-8 sm:-my-px sm:ms-10 sm:flex">
                <!-- Logo -->
                <div class="shrink-0 flex items-center">
                    <a href="{{ route('dashboard') }}">
                        <!-- <x-application-logo class="block h-9 w-auto fill-current text-gray-800" /> -->
                        <img src="{{ asset('images/logo.png') }}" 
                            alt="Admin Logo"
                            class="h-8 w-auto" />
                    </a>
                </div>

                <!-- Navigation Links -->
                <!-- <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <x-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                        {{ __('Dashboard') }}
                    </x-nav-link>
                </div> -->
                
                <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <x-nav-link :href="route('products.index')" :active="request()->routeIs('products.index')">
                        {{ __('Products') }}
                    </x-nav-link>
                </div>

                <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <x-nav-link :href="route('categories.index')" :active="request()->routeIs('categories.index')">
                        {{ __('Categories') }}
                    </x-nav-link>
                </div>

                <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <x-nav-link :href="route('technical-services.index')" :active="request()->routeIs('technical-services.index')">
                        {{ __('Technical Services') }}
                    </x-nav-link>
                </div>

                <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <x-nav-link :href="route('partnerships.index')" :active="request()->routeIs('partnerships.index')">
                        {{ __('Partnerships') }}
                    </x-nav-link>
                </div>

                <div class="hidden space-x-8 sm:-my-px sm:ms-10 sm:flex">
                    <x-nav-link :href="route('events.index')" :active="request()->routeIs('events.index')">
                        {{ __('Events') }}
                    </x-nav-link>
                </div>

                
                <div class="relative group flex items-center">

                    <div
                        class="inline-flex items-center px-3 h-full border-b-2
                        text-sm font-medium transition duration-150 ease-in-out
                        {{ request()->routeIs('home-sections.*')
                            || request()->routeIs('settings.*')
                            || request()->routeIs('contacts.*')
                            ? 'border-indigo-500 text-gray-900'
                            : 'border-transparent text-gray-600 hover:text-gray-800 hover:border-gray-300' }}">

                        CMS
                        <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor"
                            viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round"
                                stroke-width="2" d="M19 9l-7 7-7-7"/>
                        </svg>
                    </div>

                    <div
                        class="absolute left-0 top-full w-56 bg-white
                        border border-gray-200 rounded-md shadow-lg
                        opacity-0 invisible group-hover:opacity-100
                        group-hover:visible transition-all duration-200 z-50">

                        <a href="{{ route('home-sections.index') }}"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                        {{ request()->routeIs('home-sections.*') ? 'bg-gray-100 font-semibold' : '' }}">
                            Home Sections
                        </a>

                        <a href="{{ route('contacts.index') }}"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                        {{ request()->routeIs('contacts.*') ? 'bg-gray-100 font-semibold' : '' }}">
                            Contacts
                        </a>

                        <a href="{{ route('careers.index') }}"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                        {{ request()->routeIs('careers.*') ? 'bg-gray-100 font-semibold' : '' }}">
                            Careers
                        </a>

                        <a href="{{ route('settings.index') }}"
                        class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100
                        {{ request()->routeIs('settings.*') ? 'bg-gray-100 font-semibold' : '' }}">
                            Settings
                        </a>

                    </div>
                </div>
            </div>

            <!-- new block setting -->

            <div class="relative group flex items-center">

                {{-- Trigger --}}
                <div
                    class="inline-flex items-center px-3 py-2 border-b-2
                    text-sm font-medium transition duration-150 ease-in-out
                    border-transparent text-gray-600
                    hover:text-gray-800 hover:border-gray-300">

                    {{ Auth::user()->name }}

                    <svg class="ml-1 h-4 w-4" fill="none" stroke="currentColor"
                        viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2" d="M19 9l-7 7-7-7"/>
                    </svg>
                </div>

                {{-- Dropdown --}}
                <div
                    class="absolute right-0 top-full mt-2 w-48 bg-white
                    border border-gray-200 rounded-md shadow-lg
                    opacity-0 invisible group-hover:opacity-100
                    group-hover:visible transition-all duration-200 z-50">

                    <a href="{{ route('profile.edit') }}"
                    class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        Profile
                    </a>

                    <form method="POST" action="{{ route('logout') }}">
                        @csrf
                        <button type="submit"
                            class="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                            Log Out
                        </button>
                    </form>

                </div>

            </div>

            <!-- Settings Dropdown -->
            <!-- <div class="hidden sm:flex sm:items-center sm:ms-6">
                <x-dropdown align="right" width="48">
                    <x-slot name="trigger">
                        <button class="inline-flex items-center px-3 py-2 border border-transparent text-sm leading-4 font-medium rounded-md text-gray-500 bg-white hover:text-gray-700 focus:outline-none transition ease-in-out duration-150">
                            <div>{{ Auth::user()->name }}</div>

                            <div class="ms-1">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                    <path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd" />
                                </svg>
                            </div>
                        </button>
                    </x-slot>

                    <x-slot name="content">
                        <x-dropdown-link :href="route('profile.edit')">
                            {{ __('Profile') }}
                        </x-dropdown-link>

                        
                        <form method="POST" action="{{ route('logout') }}">
                            @csrf

                            <x-dropdown-link :href="route('logout')"
                                    onclick="event.preventDefault();
                                                this.closest('form').submit();">
                                {{ __('Log Out') }}
                            </x-dropdown-link>
                        </form>
                    </x-slot>
                </x-dropdown>
            </div> -->

            <!-- Hamburger -->
            <div class="-me-2 flex items-center sm:hidden">
                <button @click="open = ! open" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                        <path :class="{'hidden': open, 'inline-flex': ! open }" class="inline-flex" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
                        <path :class="{'hidden': ! open, 'inline-flex': open }" class="hidden" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <div :class="{'block': open, 'hidden': ! open}" class="hidden sm:hidden">
        <div class="pt-2 pb-3 space-y-1">
            <x-responsive-nav-link :href="route('dashboard')" :active="request()->routeIs('dashboard')">
                {{ __('Dashboard') }}
            </x-responsive-nav-link>
        </div>

        <!-- Responsive Settings Options -->
        <div class="pt-4 pb-1 border-t border-gray-200">
            <div class="px-4">
                <div class="font-medium text-base text-gray-800">{{ Auth::user()->name }}</div>
                <div class="font-medium text-sm text-gray-500">{{ Auth::user()->email }}</div>
            </div>

            <div class="mt-3 space-y-1">
                <x-responsive-nav-link :href="route('profile.edit')">
                    {{ __('Profile') }}
                </x-responsive-nav-link>

                <!-- Authentication -->
                <form method="POST" action="{{ route('logout') }}">
                    @csrf

                    <x-responsive-nav-link :href="route('logout')"
                            onclick="event.preventDefault();
                                        this.closest('form').submit();">
                        {{ __('Log Out') }}
                    </x-responsive-nav-link>
                </form>
            </div>
        </div>
    </div>
</nav>

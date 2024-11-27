<script setup lang="ts">
//
import { VueQueryDevtools } from '@tanstack/vue-query-devtools'

import { RouterLink, RouterView } from 'vue-router'
import ModeToggle from './components/ui/color-mode-toggle/ModeToggle.vue';

</script>

<template>
  <VueQueryDevtools />
  <header class="flex items-center justify-between px-6 py-4 border-b border-gray-200 bg-transparent">
    <!-- Logo on the left -->
    <div class="flex items-center">
      <img alt="Vue logo" src="@/assets/logo.svg" width="40" height="40" />
      <span class="ml-2 text-xl font-bold text-gray-800">My Vue App</span>
    </div>

    <!-- Navigation links -->
    <nav class="hidden md:flex space-x-6">
      <RouterLink to="/" class="text-gray-600 hover:text-gray-800 transition-colors duration-200">
        Home
      </RouterLink>
      <RouterLink to="/about" class="text-gray-600 hover:text-gray-800 transition-colors duration-200">
        About
      </RouterLink>
    </nav>

    <!-- Buttons on the right -->
    <div class="flex space-x-4">
      <div>
        <ModeToggle />
        <hello />
      </div>
      <RouterLink to="/signin"
        class="py-2 px-4 border border-gray-800 rounded hover:bg-gray-800 hover:text-white transition-colors duration-200">
        Sign In
      </RouterLink>
      <RouterLink to="/signup"
        class="py-2 px-4 bg-gray-800 text-white rounded hover:opacity-90 transition-opacity duration-200">
        Sign Up
      </RouterLink>
    </div>
  </header>
  <RouterView />
</template>

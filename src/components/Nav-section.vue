<template>
    <nav class="flex space-x-4">
        <RouterLink class="text-slate-500 hover:text-blue-500 font-medium px-3 py-2 rounded-full transition-all duration-300" to="/">Home</RouterLink>
        <RouterLink class="text-slate-500 hover:text-blue-500 font-medium px-3 py-2 rounded-full transition-all duration-300" to="/about">About</RouterLink>
        <RouterLink class="text-slate-500 hover:text-blue-500 font-medium px-3 py-2 rounded-full transition-all duration-300" to="/page">Page</RouterLink>
      </nav>
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>


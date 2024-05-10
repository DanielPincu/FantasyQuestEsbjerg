<template>
   <header class="w-full bg-black flex justify-center md:justify-between items-center p-4 sticky top-0 z-10">
      <h1 class="xl:text-xl text-sm hidden md:block font-bold text-orange-500">Fantasy Quest</h1>
      <nav class="flex space-x-4">
        <RouterLink class="text-slate-500 hover:text-blue-500 text-sm md:text-xl px-3 py-2 rounded-full transition-all duration-300" to="/">Home</RouterLink>

        <RouterLink class="text-slate-500 hover:text-blue-500 text-sm md:text-xl px-3 py-2 rounded-full transition-all duration-300" to="/family-quest">Family Quest</RouterLink>

        <RouterLink class="text-slate-500 hover:text-blue-500 text-sm md:text-xl px-3 py-2 rounded-full transition-all duration-300" to="/night-quest">Night Quest</RouterLink>

        <RouterLink class="text-slate-500 hover:text-blue-500 text-sm md:text-xl px-3 py-2 rounded-full transition-all duration-300" to="/faq">FAQ</RouterLink>

        <!-- <RouterLink class="text-slate-500 hover:text-blue-500  px-3 py-2 rounded-full transition-all duration-300" to="/page">Page</RouterLink> -->
      </nav>
    </header>
    
</template>

<script setup>
import { RouterLink } from 'vue-router'

</script>


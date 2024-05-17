<template>
  <header class="w-full bg-black flex justify-between items-center p-4 sticky top-0 z-10">
    <h1 class="xl:text-xl text-sm font-bold text-orange-500">Fantasy Quest</h1>
    <button @click="isOpen = !isOpen" class="md:hidden text-gray-500 focus:outline-none">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7" />
      </svg>
    </button>
    <nav :class="{'flex': isOpen, 'hidden': !isOpen}" class="flex-col md:flex md:flex-row md:space-x-4 space-y-2 md:space-y-0">
      <RouterLink class="text-slate-500 hover:text-yellow-500 text-sm md:text-xl px-3 py-2 rounded-full transition-all duration-300" to="/">Home</RouterLink>
      <RouterLink class="text-slate-500 hover:text-yellow-500 text-sm md:text-xl px-3 py-2 rounded-full transition-all duration-300" to="/family-quest">Family Quest</RouterLink>
      <RouterLink class="text-slate-500 hover:text-yellow-500 text-sm md:text-xl px-3 py-2 rounded-full transition-all duration-300" to="/night-quest">Night Quest</RouterLink>
      <RouterLink class="text-slate-500 hover:text-yellow-500 text-sm md:text-xl px-3 py-2 rounded-full transition-all duration-300" to="/faq">FAQ</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { RouterLink } from 'vue-router'

const isOpen = ref(false)
</script>

<style>
@media (min-width: 768px) {
  nav {
    display: flex ;
    flex-direction: row ;
  }
}
</style>
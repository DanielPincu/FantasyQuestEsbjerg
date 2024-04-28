<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="fixed top-0 left-0 w-full bg-gray-200 flex justify-between p-4">
      <h1 class="text-xl font-bold text-black">Vue 3 Router</h1>
      <nav class="flex space-x-4">
        <RouterLink class="text-slate-500 hover:text-blue-500 font-medium px-3 py-2 rounded-full transition-all duration-300" to="/">Home</RouterLink>
        <RouterLink class="text-slate-500 hover:text-blue-500 font-medium px-3 py-2 rounded-full transition-all duration-300" to="/about">About</RouterLink>
        <RouterLink class="text-slate-500 hover:text-blue-500 font-medium px-3 py-2 rounded-full transition-all duration-300" to="/page">Page</RouterLink>
      </nav>
    </header>

    <main class="flex-grow pt-20 px-4">
      <RouterView v-slot=" { Component }">
        <transition mode="out-in" name="bounce">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer class="fixed bottom-0 left-0 w-full bg-gray-200 flex items-center text-center p-4">
      <p>&copy; 2021 Vue 3 Router</p>
    </footer>
  </div>
</template>

<style scoped>
/* Animations (uncomment if desired) */
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

.bounce-leave-active {
  animation: bounce-out 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.9)
  }
  50% {
    transform:scale(1)
  }
  100% {
    transform: scale(1)
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1)
  }
  50% {
    transform:scale(1)
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}


.slide-fade-enter-active, .slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from, .slide-fade-leave-to {
  opacity: 0;
  transform:translate(-20px, 20px)
}


.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from, .fade-leave-to {
  opacity: 0;
}
</style>

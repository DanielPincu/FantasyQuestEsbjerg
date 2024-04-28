<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>

  <div class="h-screen flex flex-col">  <header>
      <nav class="flex justify-end pt-10 text-xl">
        <RouterLink class="px-5" to="/">Home</RouterLink>
        <RouterLink class="px-5" to="/about">About</RouterLink>
        <RouterLink class="px-5" to="/page">Page</RouterLink>
      </nav>
      <h1 class="text-3xl font-bold text-center pt-10">Vue 3 Router</h1>
    </header>

    <main class="flex-grow">  <RouterView v-slot=" { Component }">
        <transition mode="out-in" name="bounce">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <footer class="flex items-end text-center p-4 bg-gray-200">  <p>&copy; 2021 Vue 3 Router</p>
    </footer>

  </div>

</template>


<style scoped>
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

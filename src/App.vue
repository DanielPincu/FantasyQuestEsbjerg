<script setup>
import { RouterView } from 'vue-router'
import Nav from './components/Nav-section.vue'
</script>

<template>
  <div class="h-screen flex flex-col">
    <header class="w-full bg-black flex justify-between items-center p-4 sticky top-0 z-10">
      <h1 class="xl:text-xl text-sm font-bold text-orange-500">Fantasy Quest</h1>
      <Nav />
    </header>

    <!-- This is Viewport -->

    <main class="flex-grow">
      <RouterView v-slot="{ Component }">
        <transition mode="out-in" name="bounce">
          <component :is="Component" />
        </transition>
      </RouterView>
    </main>

    <!-- Viewport ends here -->

    <footer class="w-full bg-gray-200 flex items-center justify-center text-center p-4">
      <p>&copy; 2021 Vue 3 Router</p>
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
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}

@keyframes bounce-out {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(0.9);
    opacity: 0;
  }
}

.slide-fade-enter-active,
.slide-fade-leave-active {
  transition: all 0.5s ease;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  opacity: 0;
  transform: translate(-20px, 20px);
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

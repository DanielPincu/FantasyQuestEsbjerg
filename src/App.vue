<script setup>
    import { RouterView } from 'vue-router'
    import Header from './components/Header-section.vue'
    import Footer from './components/Footer-section.vue'
</script>

<template>
  <div class="h-screen flex flex-col">

    <Header />
   
    <!-- This is Viewport -->
      <main class="flex-grow">
        <RouterView v-slot="{ Component }">
          <transition mode="out-in" name="bounce">
            <component :is="Component" />
          </transition>
        </RouterView>
      </main>
    <!-- Viewport ends here -->

    <Footer />
   
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

<template>
  

  <!-- NAVIGATION, MAKE STICKY -->
  <nav class="flex flex-row md:justify-between justify-end mx-auto w-full bg-black bg-opacity-50 z-10 fixed">
    <div class="flex items-center">
      <p class="text-yellow-500 md:text-3xl">Fantasy Quest Esbjerg</p>
    </div>
    <div>
      <ul class="hidden md:flex lg:flex flex-row text-md mt-7 mb-5">
      
      <li class="ml-7 mr-6">
        <RouterLink to="/" class="font-bold text-white hover:text-rose-300">Home</RouterLink>
      </li>

      <li class="mr-6">
        <RouterLink to="/family-quest" class="font-bold text-white hover:text-rose-300">Family Quest</RouterLink>
      </li>
      
      <li class="mr-6">
        <RouterLink to="/night-quest" class="font-bold text-white hover:text-rose-300">Night Quest</RouterLink>
      </li>

      <li class="mr-6">
        <RouterLink to="/faq" class="font-bold text-white hover:text-rose-300">FAQ</RouterLink>
      </li>
    </ul>

    </div>
    <!-- burger menu -->
    <div class="lg:hidden md:hidden">
      <button class="navbar-burger flex items-center text-white hover:text-rose-300 p-3" @click="toggleMenu">
        <i class="fa-solid fa-bars text-4xl"></i>
      </button>
    </div>

    <div class="navbar-menu relative z-50" :class="{ 'hidden': !menuOpen }">
      <nav class="fixed top-0 right-0 bottom-0 flex flex-col w-full py-6 px-6 bg-black bg-opacity-80">
       
        <div class="flex items-center mb-8">
          <button class="navbar-close" @click="toggleMenu">
            <i class="text-end text-6xl text-transparent fa-solid fa-x"></i>
          </button>
        </div>
        <div>
          <ul class="flex flex-col">
            <li class="mb-10 text-end">
              <RouterLink to="/" @click="closeMenuAndRemoveOverflow" class="text-xl font-bold text-white hover:text-rose-300">Home</RouterLink>
            </li>
            <li class="mb-10 text-end">
              <RouterLink to="/family-quest" @click="closeMenuAndRemoveOverflow" class="text-xl font-bold text-white hover:text-rose-300">Family Quest</RouterLink>
            </li>
            <li class="mb-10 text-end">
              <RouterLink to="/night-quest" @click="closeMenuAndRemoveOverflow" class="text-xl font-bold text-white hover:text-rose-300">Night Quest</RouterLink>
            </li>

            <li class="mb-10 text-end">
              <RouterLink to="/faq" @click="closeMenuAndRemoveOverflow" class="text-xl font-bold text-white hover:text-rose-300">FAQ</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>
   
  </nav>
</template>

<script setup>
import { ref } from 'vue';
import { RouterLink } from 'vue-router';

const menuOpen = ref(false);

const toggleMenu = () => {
  menuOpen.value = !menuOpen.value;
  if (menuOpen.value) {
    document.body.classList.add('overflow-hidden');
  } else {
    document.body.classList.remove('overflow-hidden');
  }
};

const closeMenuAndRemoveOverflow = () => {
  menuOpen.value = false;
  document.body.classList.remove('overflow-hidden');
};
</script>

<style scoped>
.overflow-hidden {
  overflow: hidden;
}
</style>

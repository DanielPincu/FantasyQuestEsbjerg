<template>
  

  <!-- NAVIGATION, MAKE STICKY -->
  <nav class="flex flex-row md:justify-end justify-end mx-auto w-full bg-black bg-opacity-75 z-50 sticky top-0">
    
    <div class="pr-20">
      <ul class="hidden md:flex lg:flex flex-row text-md mt-7 mb-5">
      
      <li class="ml-7 mr-6 animate">
        <RouterLink to="/" class="hover:text-orange-500">Home</RouterLink>
      </li>

      <li class="mr-6 animate">
        <RouterLink to="/family-quest" class="hover:text-orange-500">Family Quest</RouterLink>
      </li>
      
      <li class="mr-6 animate">
        <RouterLink to="/night-quest" class="hover:text-orange-500">Night Quest</RouterLink>
      </li>

      <li class="mr-6 animate">
        <RouterLink to="/faq" class="hover:text-orange-500">FAQ</RouterLink>
      </li>
    </ul>

    </div>
    <!-- burger menu -->
    <div class="lg:hidden md:hidden">
      <button aria-label="Navigation" class="navbar-burger flex items-center text-white hover:text-rose-300 p-3" @click="toggleMenu">
        <i class="fa-solid fa-bars text-4xl"></i>
      </button>
    </div>

    <div class="navbar-menu relative z-50" :class="{ 'hidden': !menuOpen }">
      <nav class="fixed top-0 right-0 bottom-0 flex flex-col w-full bg-black bg-opacity-80">
       
       
        <div class="bg-black bg-opacity-80 px-5">
          <div class="flex items-center mb-8">
            <button class="navbar-close" @click="toggleMenu">
              <i class="text-end text-xl pt-5 text-white fa-solid fa-x"></i>
            </button>
          </div>
          <ul class="flex flex-col">
            <li class="mb-10 text-end">
              <RouterLink to="/" @click="closeMenuAndRemoveOverflow" class="text-xl">Home</RouterLink>
            </li>
            <li class="mb-10 text-end">
              <RouterLink to="/family-quest" @click="closeMenuAndRemoveOverflow" class="text-xl">Family Quest</RouterLink>
            </li>
            <li class="mb-10 text-end">
              <RouterLink to="/night-quest" @click="closeMenuAndRemoveOverflow" class="text-xl">Night Quest</RouterLink>
            </li>

            <li class="mb-10 text-end">
              <RouterLink to="/faq" @click="closeMenuAndRemoveOverflow" class="text-xl">FAQ</RouterLink>
            </li>
          </ul>
        </div>
      </nav>
    </div>

    <div class="scroll-watcher">

    </div>
    
  </nav>
  
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { RouterLink } from 'vue-router';
import anime from 'animejs';

onMounted(() => {
  const target = document.querySelector('.animate');

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        anime({
          targets: '.animate',
          translateX: 50,
        delay: anime.stagger(100)
        });
        observer.unobserve(target); 
      }
    });
  }, {
    threshold: 0.5 
  });

  observer.observe(target);
});

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

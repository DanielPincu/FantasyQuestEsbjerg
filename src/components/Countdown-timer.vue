<template>
  <div class="text-center flex items-center justify-center ">
    <p class="text-3xl text-orange-500 font-bold pr-10">TIME LEFT</p>
    <div class="flex justify-center items-center space-x-4">
      <div class="w-14 h-14 md:w-28 md:h-28 rounded-full bg-orange-500 flex items-center justify-center">
        <p class="text-white text-sm xl:text-2xl">{{ days }} days</p>
      </div>
      <p class="animate-pulse text-[3em]">:</p>
      <div class="w-14 h-14 md:w-24 md:h-24 rounded-full bg-orange-500 flex items-center justify-center">
        <p class="text-white text-sm xl:text-xl">{{ hours }} hrs</p>
      </div>
      <p class="animate-pulse text-[3em]">:</p>
      <div class="w-14 h-14 md:w-20 md:h-20 rounded-full bg-orange-500 flex items-center justify-center">
        <p class="text-white text-sm">{{ minutes }} min</p>
      </div>
    </div>
  </div>
</template>

  
  <script setup>
import { ref, computed, onMounted } from 'vue';

const eventDate = new Date('2024-09-14T00:00:00');
const currentDate = ref(new Date());

const days = computed(() => {
  const diffTime = eventDate.getTime() - currentDate.value.getTime();
  return Math.floor(diffTime / (1000 * 60 * 60 * 24));
});

const hours = computed(() => {
  const diffTime = eventDate.getTime() - currentDate.value.getTime();
  return Math.floor((diffTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
});

const minutes = computed(() => {
  const diffTime = eventDate.getTime() - currentDate.value.getTime();
  return Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
});



onMounted(() => {
  // Update current date every second
  setInterval(() => {
    currentDate.value = new Date();
  }, 1000);
});
</script>

  
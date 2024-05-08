<template>
    <div class="text-center text-2xl pt-5 text-orange-500">
      <p>Time Left: {{ days }} days, {{ hours }} hours</p>
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



onMounted(() => {
  // Update current date every second
  setInterval(() => {
    currentDate.value = new Date();
  }, 1000);
});
</script>

  
<template>
  <div class="text-center flex items-center pt-5 justify-center" data-aos="fade-up">
    <p class="md:text-3xl text-xl text-gradient pt-5 font-bold pr-5">TIME LEFT</p>
    <div class="flex justify-center items-center space-x-4">
      <div class="w-14 h-14 border-4 border-orange-400 bg-orange-500 bg-opacity-20 text-slate-300 md:w-24 md:h-24  arrow-up rounded-full flex items-center justify-center">
        <p class="text-white text-sm xl:text-xl">{{ days }} <br> days</p>
      </div>
      <p class="animate-pulse text-[3em]">:</p>
      <div class="w-14 h-14 md:w-24 md:h-24 arrow-up rounded-full border-4 border-orange-400 bg-orange-500 bg-opacity-20 flex items-center justify-center">
        <p class="text-white text-sm xl:text-xl">{{ hours }} <br> hours</p>
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

// const minutes = computed(() => {
//   const diffTime = eventDate.getTime() - currentDate.value.getTime();
//   return Math.floor((diffTime % (1000 * 60 * 60)) / (1000 * 60));
// });



onMounted(() => {

  setInterval(() => {
    currentDate.value = new Date();
  }, 1000);

});

</script>

<style>

.arrow-up {
  width: 100px; 
  height: 100px; 
  border-left: 4px solid transparent;
  border-right: 4px solid transparent;
  border-bottom: 4px solid orange;
}

@media only screen and (max-width: 767px) {
  .arrow-up {
    width: 50px;
    height: 50px;
  }
}

</style>
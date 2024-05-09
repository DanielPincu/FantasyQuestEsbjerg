
<template>
  <div class="w-full relative">
    <video autoplay muted loop playsinline class="w-full">
      <source src="../assets/img/ddd.mp4" type="video/mp4">
    </video>
    <div class="absolute top-1/4 left-0 right-0">

      <div class="bg-black bg-opacity-50 h-[26em]">

        <div class="absolute top-0 left-0 right-10 transform  -translate-y-1/2">
            <div class="max-w-screen-xl mx-auto py-4">
              <img class="w-32 md:pt-32 md:w-64 xl:w-[30em]" src="../assets/img/drage.png" alt="">
            </div>
        </div>


        <div class="max-w-screen-xl mx-auto px-8">
          <h2 class="text-orange-400 pt-10 text-center tracking-widest text-4xl md:text-[60px] font-bold">Fantasy Quest
          </h2>

          <h2 class="text-orange-400 text-center tracking-widest md:pt-5 text-4xl md:text-[60px] font-bold">Esbjerg</h2>
          <h1 class="text-orange-400 text-center tracking-widest text-md md:text-[40px] pt-3 font-bold">14 September 2024</h1>

          <CountdownTimer/>
          <BuyButton/>
      
        </div>
      </div>
    </div>
  </div>
  <!-- <Intro/> -->
</template>

<script setup>
import CountdownTimer from '../components/Countdown-timer.vue'
import BuyButton from '../components/Buy-button.vue'
// import Intro from '../components/Intro-section.vue'

</script>
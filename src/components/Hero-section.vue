
<template>
  <div class="w-full relative">
    <video autoplay muted loop playsinline class="w-full">
      <source src="../assets/img/ddd.mp4" type="video/mp4">
    </video>
    <div class="absolute top-14 md:top-44 left-0 right-0">

      <div class="bg-black  bg-opacity-50 h-[22em]">

        <div class="absolute top-0 left-0 right-10 transform  -translate-y-64">
            <div class="max-w-screen-xl mx-auto py-4">
              <img class="w-32 md:pt-32 md:w-64 xl:w-[25em]" src="../assets/img/drage.png" alt="">
            </div>
        </div>


        <div class="max-w-screen-xl mx-auto px-8">
          <h2 class="text-gradient pt-10 pb-10 text-center tracking-widest text-xl md:text-[60px] font-bold">Fantasy Quest <br>
            <br class="hidden md:flex">
          
            Esbjerg
          </h2>

          
          <h1 class="text-gradient text-center mb-5 tracking-widest md:text-[30px] pt-3 font-bold">14 September 2024</h1>

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

<style>
  .text-gradient {
  background: linear-gradient(to bottom, #ebdb95, #d9a52b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
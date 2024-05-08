
<template>
  <div class="w-full relative">
    <video autoplay muted loop playsinline class="w-full">
      <source src="../assets/img/website-banner.mp4" type="video/mp4">
    </video>
    <div class="absolute top-1/4 left-0 right-0">

      <div class="bg-black bg-opacity-50">

        <div class="max-w-screen-xl mx-auto px-8 py-4">
          <h1 class="text-orange-400 text-center tracking-widest text-md xl:text-[40px] font-bold">14 September 2024</h1>
          <CountdownTimer/>
          <BuyButton/>
          <h2 class="text-orange-400 pt-10 text-center tracking-widest text-md xl:text-[60px] font-bold">Fantasy Quest Esbjerg</h2>
        </div>
        

        <div class="absolute top-0 left-0 right-0 transform -translate-y-1/2">
          <div>
            <div class="max-w-screen-xl mx-auto px-8 py-4">
              <img class="w-32 md:w-64 xl:w-96" src="../assets/img/drage.png" alt="">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import CountdownTimer from '../components/Countdown-timer.vue'
import BuyButton from '../components/Buy-button.vue'

</script>
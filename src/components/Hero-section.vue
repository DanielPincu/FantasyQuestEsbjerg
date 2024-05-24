
<template>


  <div v-if="introData">

    <div v-for="item in introData" :key="item" class="relative">
          
      <div class="clouds overflow-hidden">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds,fog and mist" style="--i:1">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds,fog and mist" style="--i:2">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds,fog and mist" style="--i:3">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds,fog and mist" style="--i:4">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds,fog and mist" style="--i:5">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds,fog and mist" style="--i:6">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds,fog and mist" style="--i:7">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds,fog and mist" style="--i:8">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds,fog and mist" style="--i:9">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds,fog and mist" style="--i:10">
      </div>

      <div class="clouds2 flex justify-end overflow-hidden">
        <div>
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds,fog and mist" style="--i:1">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds,fog and mist" style="--i:2">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds,fog and mist" style="--i:3">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds,fog and mist" style="--i:4">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds,fog and mist" style="--i:5">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds,fog and mist" style="--i:6">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds,fog and mist" style="--i:7">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds,fog and mist" style="--i:8">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds,fog and mist" style="--i:9">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds,fog and mist" style="--i:10">
        </div>
      </div>


      <img class="" :src="item.hero_image" alt="The awe-inspiring sight of a majestic dragon breathing forth mythical flames, its fierce presence igniting wonder and fear in equal measure">
      
      <div class="absolute hidden xl:block bottom-0 md:bottom-5 xl:bottom-20 left-0 right-0">
        <CountdownTimer/>
      </div>
    </div>

    <div class="block xl:hidden ">
        <CountdownTimer/>
    </div>

    <div class="xl:bg-gradient-to-b from-[#6E94AE] to-[#1A202C]">
      <a target="_blank" href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3"><BuyButton/></a>
    </div>
    
  </div>

  <div v-else>
    <p>Loading data...</p>
  </div>

  
  

  
</template>

<script setup>

import { onMounted } from 'vue'
import connectMe from '../modules/connectMe'
import CountdownTimer from '../components/Countdown-timer.vue'
import BuyButton from '../components/Buy-button.vue'

const { introData,  fetchData } = connectMe()

onMounted(() => {
  fetchData()
})


</script>

<style>
  .text-gradient {
  background: linear-gradient(to bottom, #ebdb95, #d9a52b);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
</style>
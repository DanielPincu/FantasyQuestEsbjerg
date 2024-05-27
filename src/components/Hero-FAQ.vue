
<template>


    <div v-if="faqData">
  
      <div v-for="item in faqData" :key="item" class="relative">
            
        <div class="clouds overflow-hidden">
          <img src="../assets/img/clouds/cloud1.webp" alt="clouds mist and fog" style="--i:1">
          <img src="../assets/img/clouds/cloud2.webp" alt="clouds mist and fog" style="--i:2">
          <img src="../assets/img/clouds/cloud3.webp" alt="clouds mist and fog" style="--i:3">
          <img src="../assets/img/clouds/cloud4.webp" alt="clouds mist and fog" style="--i:4">
          <img src="../assets/img/clouds/cloud5.webp" alt="clouds mist and fog" style="--i:5">
          <img src="../assets/img/clouds/cloud1.webp" alt="clouds mist and fog" style="--i:6">
          <img src="../assets/img/clouds/cloud2.webp" alt="clouds mist and fog" style="--i:7">
          <img src="../assets/img/clouds/cloud3.webp" alt="clouds mist and fog" style="--i:8">
          <img src="../assets/img/clouds/cloud4.webp" alt="clouds mist and fog" style="--i:9">
          <img src="../assets/img/clouds/cloud5.webp" alt="clouds mist and fog" style="--i:10">
        </div>
  
        <div class="clouds2 flex justify-end overflow-hidden">
          <div>
          <img src="../assets/img/clouds/cloud1.webp" alt="clouds mist and fog" style="--i:1">
          <img src="../assets/img/clouds/cloud2.webp" alt="clouds mist and fog" style="--i:2">
          <img src="../assets/img/clouds/cloud3.webp" alt="clouds mist and fog" style="--i:3">
          <img src="../assets/img/clouds/cloud4.webp" alt="clouds mist and fog" style="--i:4">
          <img src="../assets/img/clouds/cloud5.webp" alt="clouds mist and fog" style="--i:5">
          <img src="../assets/img/clouds/cloud1.webp" alt="clouds mist and fog" style="--i:6">
          <img src="../assets/img/clouds/cloud2.webp" alt="clouds mist and fog" style="--i:7">
          <img src="../assets/img/clouds/cloud3.webp" alt="clouds mist and fog" style="--i:8">
          <img src="../assets/img/clouds/cloud4.webp" alt="clouds mist and fog" style="--i:9">
          <img src="../assets/img/clouds/cloud5.webp" alt="clouds mist and fog" style="--i:10">
          </div>
        </div>
  
  
        <img class="w-full" :src="item.hero_image" alt="A fantastical hero image depicting a mystical scene with a wizard, weaving magic and mystery into the fabric of the imagination">
        
        <div class="absolute hidden xl:block bottom-0 md:bottom-5 xl:bottom-20 left-0 right-0">
          <CountdownTimer/>
        </div>
      </div>
  
      <div class="block xl:hidden ">
          <CountdownTimer/>
      </div>
  
      <BuyButton/>
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
  
  const { faqData,  fetchData } = connectMe()
  
  onMounted(() => {
    fetchData()
  })
  
  
  </script>
  
  <style>
  
  </style>
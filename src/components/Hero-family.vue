
<template>

<div v-if="introData">

<div v-for="item in introData" :key="item" class="relative">
  <img class="" src="../assets/img/family.png" alt="">
  
  <div class="absolute hidden xl:block bottom-0 md:bottom-32 xl:bottom-64 left-0 right-0">
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
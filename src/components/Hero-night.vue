
<template>

    <div v-if="nightData">
    
    <div v-for="item in nightData" :key="item" class="relative">
      <div class="clouds2 invert blur-sm overflow-hidden">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds, fog and fog" style="--i:1">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds, fog and fog" style="--i:2">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds, fog and fog" style="--i:3">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds, fog and fog" style="--i:4">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds, fog and fog" style="--i:5">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds, fog and fog" style="--i:6">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds, fog and fog" style="--i:7">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds, fog and fog" style="--i:8">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds, fog and fog" style="--i:9">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds, fog and fog" style="--i:10">
      </div>

      <div class="clouds2 flex blur-sm invert justify-end overflow-hidden">
        <div>
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds, fog and fog" style="--i:1">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds, fog and fog" style="--i:2">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds, fog and fog" style="--i:3">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds, fog and fog" style="--i:4">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds, fog and fog" style="--i:5">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds, fog and fog" style="--i:6">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds, fog and fog" style="--i:7">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds, fog and fog" style="--i:8">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds, fog and fog" style="--i:9">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds, fog and fog" style="--i:10">
        </div>
      </div>

      <img class="w-full h-full" :src="item.hero_image" alt="The sinister allure of Malice, a formidable female wizard, emanating dark magic and commanding the shadows with her wicked power">
      
      <div class="absolute hidden xl:block bottom-0 md:bottom-20 left-0 right-0">
        <CountdownTimer/>
      </div>
    </div>
    
    <div class="block xl:hidden ">
        <CountdownTimer/>
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
      // import BuyButton from '../components/Buy-button.vue'
      
      const { nightData,  fetchData } = connectMe()
      
      onMounted(() => {
        fetchData()
      })
      
      
      </script>
      
      <style scoped>

     
      </style>
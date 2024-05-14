
<template>

    <div v-if="introData">
    
    <div v-for="item in introData" :key="item" class="relative">
      <div class="clouds2 invert blur-sm overflow-hidden">
        <img src="../assets/img/clouds/cloud1.png" style="--i:1">
        <img src="../assets/img/clouds/cloud2.png" style="--i:2">
        <img src="../assets/img/clouds/cloud3.png" style="--i:3">
        <img src="../assets/img/clouds/cloud4.png" style="--i:4">
        <img src="../assets/img/clouds/cloud5.png" style="--i:5">
        <img src="../assets/img/clouds/cloud1.png" style="--i:6">
        <img src="../assets/img/clouds/cloud2.png" style="--i:7">
        <img src="../assets/img/clouds/cloud3.png" style="--i:8">
        <img src="../assets/img/clouds/cloud4.png" style="--i:9">
        <img src="../assets/img/clouds/cloud5.png" style="--i:10">
      </div>

      <div class="clouds2 flex blur-sm invert justify-end overflow-hidden">
        <div>
        <img src="../assets/img/clouds/cloud1.png" style="--i:1">
        <img src="../assets/img/clouds/cloud2.png" style="--i:2">
        <img src="../assets/img/clouds/cloud3.png" style="--i:3">
        <img src="../assets/img/clouds/cloud4.png" style="--i:4">
        <img src="../assets/img/clouds/cloud5.png" style="--i:5">
        <img src="../assets/img/clouds/cloud1.png" style="--i:6">
        <img src="../assets/img/clouds/cloud2.png" style="--i:7">
        <img src="../assets/img/clouds/cloud3.png" style="--i:8">
        <img src="../assets/img/clouds/cloud4.png" style="--i:9">
        <img src="../assets/img/clouds/cloud5.png" style="--i:10">
        </div>
      </div>

      <img class="" src="../assets/img/night.png" alt="">
      
      <div class="absolute hidden xl:block bottom-0 md:bottom-20 left-0 right-0">
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
      
        

     
      
   <div class="thunder">
    <div class="md:grid grid-cols-2 mt-20 container mx-auto">

<div>
 <p class="pb-10 text-xl">When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned up. Now you really have to think creatively and solve tasks that require both courage, cooperation and ingenuity in order for you to complete the quest and save Esbjerg.</p>

 <p class="pb-10 text-xl">If you love solving puzzles and cracking codes, don't miss out on this ultimate experience. We send you and your friends on your ultimate adventure in Esbjerg's streets and alleys.</p>

 <p class="pb-10 text-xl">Here you will have to collaborate and devise new solutions to complete the AftenQuest.</p>
</div>

<div>
 <img src="../assets/img/seaman.png" alt="">
</div>


</div>
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
      
      <style scoped>

      .thunder {
       
        background-image: url('../assets/img/thunder.png');
        
        background-repeat: no-repeat;
        background-position: center;
        
        
      }
      
      </style>
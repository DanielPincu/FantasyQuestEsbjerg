<template>
  <div v-if="historyData">
     <div v-for="item in historyData" :key="item">

          <h1 class="text-center md:text-[50px] text-3xl pt-24 pb-10 text-gradient">This is how you join the Quests</h1>

          <div class="md:grid grid-cols-2 gap-5 xl:gap-0 items-center container mx-auto px-5">

          <div class="flex items-center justify-center">
               <img :src="item.join_quest_image" alt="">
          </div>

               <div>

               <p class="mt-5 md:text-2xl text-sm text-center">{{ item.how_to_join }}</p>
          
               </div>
               

          </div>

          <div class="md:grid grid-cols-2 gap-5 xl:gap-0 items-center text-center justify-center container mx-auto px-5 pt-32">

               <div>
               <h2 class="text-4xl text-gradient pb-10">{{ item.history_heading1 }}</h2>
               <p class="mt-5 md:text-2xl text-sm">{{ item.history_intro1 }}</p>
               
               <p class="mt-5 md:text-2xl text-sm">{{ item.history_intro2 }}</p>
               
               <p class="mt-5 md:text-2xl text-sm">{{ item.history_intro3 }}</p>

               <p class="mt-5 md:text-2xl text-sm">{{ item.history_intro4 }}</p>
               </div>

               <div class="flex items-center justify-center">
               <img class="w-96" :src="item.history_image1" alt="">
          </div>

          </div>

          <h2 class="text-gradient text-4xl text-center pb-5 pt-32">{{ item.history_heading2 }}</h2>

          <div class="md:grid grid-cols-2 md:gap-20 items-center text-center justify-center container mx-auto px-5 py-10">

               <div>
               <p class="text-center md:text-2xl text-sm pb-5">{{ item.history_intro5 }}</p>

               <p class="text-center md:text-2xl text-sm pb-5">{{ item.history_intro6 }}</p>
          
               <p class="text-center md:text-2xl text-sm pb-5">{{ item.history_intro7 }}</p>

               </div>

               <div class="flex items-center justify-center">
               <img :src="item.history_image2" alt="">
               </div>

          </div>
          
     </div>
 </div>

 <div v-else>
    <p>Loading data...</p>
</div>

</template>

<script setup>

import { onMounted } from 'vue'

import connectMe from '../modules/connectMe'
const { historyData,  fetchData } = connectMe()


onMounted(() => {
  fetchData()
})

</script>

<style lang="scss" scoped>

</style>
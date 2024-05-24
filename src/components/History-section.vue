<template>
  <div v-if="historyData">
     <div v-for="item in historyData" :key="item">

          
          <div class="xl:grid grid-cols-2 gap-5 xl:gap-0 items-center text-center justify-center container mx-auto px-5 pt-20">

               <div class="flex items-center relative justify-center">
                    <div>
                         <h2 class="text-4xl text-gradient pb-10 move-in-right">{{ item.history_heading1 }}</h2>

                         <div v-if="isVisible" class="absolute hidden md:block z-20 md:top-1/8 md:right-10">
                              <p class="oval-thought absolute top-0">We have to do something...</p>
                         </div>
                         
                         <div @click="toggleVisibility" class="md:hover:scale-105 md:cursor-pointer duration-500 flex justify-center">
                              <img class="md:w-96 w-64 move-in-right" :src="item.history_image1" alt="Arkivaren, the wizard also known as 'The Archivist,' handling ancient spell books and secret scrolls with supreme wisdom">
                         </div>
                    </div>
               </div>

               <div>
              
                    <div class="move-in-left">
                         <p class="mt-5 md:text-3xl" v-html="highlightWords(item.history_intro1)"></p>
                         
                         <p class="mt-5 md:text-3xl">{{ item.history_intro2 }}</p>
                         
                         <p class="mt-5 md:text-3xl" v-html="highlightWords(item.history_intro3)"></p>

                         <p class="mt-5 md:text-3xl">{{ item.history_intro4 }}</p>
                    </div>
              
               </div>

          </div>


          <div class="xl:grid grid-cols-2 md:gap-20 items-center text-center justify-center container mx-auto px-5">

               <div class="xl:hidden flex items-center justify-center">
                    <div>
                         <h2 class="text-gradient text-4xl text-center pb-5 pt-32 move-in-right">{{ item.history_heading2 }}</h2>

                         <div v-if="isVisible" class="absolute hidden md:block z-20 md:top-1/8 md:right-10">
                              <p class="oval-thought absolute top-0">We have to do something...</p>
                         </div>
                         <div class="move-in-left flex justify-center">
                              <img :src="item.history_image2" alt="The four guardians of the sea, majestic and vigilant, each embodying the power and grace of the ocean depths">
                         </div>
                    </div>
               </div>


               <div class="move-in-right">
               <p class="text-center md:text-3xl pb-5">{{ item.history_intro5 }}</p>

               <p class="text-center md:text-3xl pb-5" v-html="highlightWords(item.history_intro6)"></p>
          
               <p class="text-center md:text-3xl pb-5">{{ item.history_intro7 }}</p>

               <h2 class="text-3xl">It's time for Fantasy Quest Esbjerg.</h2>
               <br>
               <h4 class="text-orange-500 text-4xl">Are you ready?</h4>

               </div>

               <div class="xl:flex hidden items-center justify-center">
                    <div class="relative">
                         <h2 class="text-gradient text-4xl text-center pb-5 pt-32 move-in-left">{{ item.history_heading2 }}</h2>

                         <div v-if="isVisible2" class="absolute hidden md:block z-20 md:top-52  md:right-0">
                              <p class="oval-thought absolute top-0">We have to do something...</p>
                         </div>

                         <div class="hover:scale-105 duration-500 move-in-left">
                              <img @click="toggleVisibility2" :src="item.history_image2" alt="The four guardians of the sea, majestic and vigilant, each embodying the power and grace of the ocean depths">
                         </div>

                    </div>
               </div>

          </div>
          


          <h3 class="text-center md:text-5xl text-3xl pt-24 mb-10 text-gradient fade-in">This is how you join the Quests</h3>

          <div class="xl:grid grid-cols-2 gap-5 xl:gap-0 items-center container mx-auto px-5 fade-in">

          <div class="flex items-center justify-center">
               <img :src="item.join_quest_image" alt="Join the quest and journey into realms of magic, mystery, and endless possibility">
          </div>

               <div>

               <p class="mt-5 md:text-3xl text-center">{{ item.how_to_join1 }}</p>
               <p class="mt-5 md:text-3xl text-center">{{ item.how_to_join2 }}</p>
               <p class="mt-5 md:text-3xl text-center">{{ item.how_to_join3 }}</p>
                    <ul class="text-center text-orange-500 md:text-3xl my-5 btn">
                         <li class="pb-2">{{ item.family_program }}</li>
                         <li>{{ item.night_program }}</li>
                    </ul>
               <p class="mt-5 md:text-3xl text-center">{{ item.how_to_join4 }}</p>
          
               </div>
               

          </div>

     </div>
 </div>

 <div v-else>
    <p>Loading data...</p>
</div>

</template>

<script setup>

import { ref, onMounted } from 'vue'

import connectMe from '../modules/connectMe'
const { historyData,  fetchData } = connectMe()




onMounted(() => {
  fetchData()
})

const isVisible = ref(false);
const isVisible2 = ref(false);

const toggleVisibility = () => {
  isVisible.value = !isVisible.value;
};

const toggleVisibility2 = () => {
  isVisible2.value = !isVisible2.value;
};

// Hightlighter

const highlightWords = (text) => {
const wordsToHighlight = [

'kept an eye on the sea',
'good fighters',
'Man by the sea',
'We need heroes in Esbjerg',


];


let highlightedText = text;
wordsToHighlight.forEach(word => {
  const regEx = new RegExp('\\b' + word + '\\b', 'gi');
  highlightedText = highlightedText.replace(regEx, `<span class="text-yellow-500 text-xl md:text-3xl">${word}</span>`);
});
return highlightedText;
}

// Highlighter ends

</script>

<style lang="scss" scoped>
p {
  line-height: normal;
}

</style>
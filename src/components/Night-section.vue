<template>
  <div v-if="nightData">
   <div v-for="(item, index) in nightData" :key="index">
     <h1 class="md:text-5xl text-xl container mx-auto text-yellow-500 text-gradient text-center pt-20 fade-in">
       For those of you who love solving mysteries
     </h1>

     <div class="relative">
       <img class="absolute right-0 top-80 z-10 opacity-50 md:opacity-100" src="../assets/img/clouds/thunder.webp" alt="Enormous thunderbolt lightening the page">
       <div class="md:grid grid-cols-2 mt-5 md:mt-20 gap-10 container mx-auto">
         <div class="relative z-20 move-in-right">
           <p class="pb-5 md:text-2xl" v-html="highlightWords(item.intro1)"></p>
           <p class="pb-5 md:text-2xl" v-html="highlightWords(item.intro2)"></p>
           <p class="pb-5 md:text-2xl">{{ item.intro3 }}</p>
           <p class="pb-5 md:text-2xl">{{ item.intro4 }}</p>
         </div>
         <div>
           <img class="scale-x-[-1] move-in-left w-full" :src="item.image1" alt="Step into the shadows of a nocturnal fantasy quest, where darkness conceals both danger and secrets waiting to be uncovered">
         </div>
       </div>
     </div>

     <a class="fade-in" target="_blank" href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4">
       <BuyButton />
     </a>

     <div class="relative">
       <img class="absolute left-0 top-0 z-10 opacity-30 md:opacity-100 scale-x-[-1]" src="../assets/img/clouds/thunder.webp" alt="">
       <div class="md:grid grid-cols-12 mt-20 container mx-auto move-in-left">
         <div class="col-span-6"></div>
         <div class="relative z-20 col-span-6">
           <p class="pb-5 md:text-2xl">{{ item.info1 }}</p>
           <p class="pb-5 md:text-2xl font-bold">{{ item.info2 }}</p>
           <p class="md:text-2xl" v-html="highlightWords(item.info3)"></p>
           <ul class="text-center text-sm md:text-4xl my-5 btn">
             <li>The Evening Quest:</li>
             <li class="text-gradient">{{ item.schedule }}</li>
             <li class="md:text-sm text-[10px]">The quest takes approx. one hour to complete.</li>
           </ul>
         </div>
       </div>
     </div>

     <!-- Portal Setup Mobile -->
     <div class="wrapper block md:hidden pt-5">
      <p class="text-center text-3xl text-gradient pb-5">Where is the starting point?</p>
       <div class="container mx-auto grid grid-cols-1 items-center">
         <div class="flex justify-center" @click="toggleVisibility2">
           <img class="w-80 h-full" :src="item.gnist_mobile" alt="Elf with pointed ears and mystical attire standing in a forest glade.">
         </div>
       </div>
       <div class="container mx-auto grid grid-cols-1 items-center">
        <div class="md:pt-0 py-5">
           <a class="fade-in" target="_blank" href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4">
            <BuyButton />
           </a>
        </div>
         <div class="relative flex justify-center">
          
           <img class="w-96" :src="item.portal_dark" alt="Peer into the depths of the abyss through the ominous veil of a dark portal, where unknown realms beckon with whispers of peril and promise">
           <img @click="toggleVisibility(index)" :src="item.questionmark" alt="here is the clue" class="absolute cursor-pointer animate-pulse w-10 hover:scale-110 duration-500 top-1/2 left-[48%] transform -translate-y-0">
           <div @click="toggleVisibility(index)" v-show="visibleDiv === index" class="md:w-96 w-72 cursor-pointer absolute top-1/4 bg-gradient-to-b from-[#402454] to-[#2A294D] text-slate-300 rounded-3xl flex flex-col items-center mb-2">
             <p class="text-xl flex flex-col items-center p-5">
               {{ item.riddle }}
               <img class="w-32 pt-5 text-center" :src="item.zombie" alt="Gaze upon the ghastly visage of a zombie unicorn, its rotting flesh and twisted horn embodying the macabre fusion of beauty and horror">
             </p>
           </div>
         </div>
       </div>
     </div>
     <!-- Portal Setup Mobile END -->





     <!-- Portal Setup Desktop -->     
     <div class="wrapper hidden md:block">
      <p class="z-50 text-5xl text-center text-gradient pt-20 move-in-right">Where is the starting point?</p>
       <div class="container mx-auto grid grid-cols-3 pt-32 items-center">
         <div class="relative move-in-right">
           <img class="w-full" :src="item.portal_dark" alt="Peer into the depths of the abyss through the ominous veil of a dark portal, where unknown realms beckon with whispers of peril and promise">
           <img @click="toggleVisibility(index)" :src="item.questionmark" alt="here is the clue" class="absolute cursor-pointer animate-pulse w-5 md:w-10 xl:w-20 hover:scale-90 xl:scale-75 duration-500 top-1/2 md:left-[44%] xl:left-[46%] transform -translate-x-1/8 -translate-y-1/4">

           <div @click="toggleVisibility(index)" v-show="visibleDiv === index" class="md:w-96 w-72 cursor-pointer absolute top-44 bg-gradient-to-b from-[#8849A6] to-[#362143] text-slate-300 rounded-3xl flex flex-col items-center mb-2">
             <p class="text-xl flex flex-col items-center p-5">
               {{ item.riddle }}
               <img class="w-44 pt-5 text-center" :src="item.zombie" alt="Gaze upon the ghastly visage of a zombie unicorn, its rotting flesh and twisted horn embodying the macabre fusion of beauty and horror">
             </p>
           </div>
         </div>
         <div class="text-center">
           <div class="md:text-xl animate-pulse text-sm hover:scale-110 duration-500 cursor-pointer" @click="toggleVisibility2"><p>SEE THE CLUE</p></div> 
         </div>
         <div class="relative move-in-left">
           <div v-if="isVisible2" class="absolute hidden md:block z-20 md:top-0 md:left-0 ">
             <p class="oval-dark bg-gradient-to-b from-[#8E4BA3] to-[#2A294D] absolute text-slate-300 top-0">You have to search for the clue a little closer</p>
           </div>
           <div>
             <img :src="item.gnist_dark" alt="Elf with pointed ears and mystical attire standing in a forest glade">
           </div>
         </div>
       </div>
     </div>
     <!-- Portal Setup Desktop END -->
   </div>
       <div class="md:pt-0 pt-5 xl:block hidden">
           <a class="fade-in" target="_blank" href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4">
            <BuyButton />
           </a>
       </div>
 </div>
 <div v-else>
   <p>Loading...</p>
 </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BuyButton from '../components/Buy-button.vue';
import connectMe from '../modules/connectMe';

const { nightData, fetchData } = connectMe();

onMounted(() => {
 fetchData();
});

const isVisible2 = ref(false);
const toggleVisibility2 = () => {
 isVisible2.value = !isVisible2.value;
};

const visibleDiv = ref(null);
const toggleVisibility = (index) => {
 visibleDiv.value = visibleDiv.value === index ? null : index;
};

// Highlighter function
const highlightWords = (text) => {
 const wordsToHighlight = [
   'difficulty',
   'turned up',
   'courage, cooperation and ingenuity',
   '14 September 2024'
 ];

 let highlightedText = text;
 wordsToHighlight.forEach(word => {

  // creates a regular expression that matches the exact word stored in the variable word, wherever it appears in a string, in a case-insensitive manner. The \\b ensures it matches only whole words, not substrings within other words.
   const regEx = new RegExp('\\b' + word + '\\b', 'gi');

   highlightedText = highlightedText.replace(regEx, `<span class="text-yellow-500 text-xl md:text-3xl">${word}</span>`);
 });
 return highlightedText;
};
</script>

<style lang="scss" scoped>
p {
 line-height: normal;
}

.thunder {
 background-image: url('../assets/img/thunder.webp');
 background-repeat: no-repeat;
 background-position: center;
}

p {
 line-height: normal;
}


.oval-dark{
  // border: 2px solid #39317E;
  position: relative;
  width: 250px;
  padding: 20px 40px;
  margin: 1em auto 0px;
  text-align: center;
  border-radius: 220px / 120px;     
}

.oval-dark:before{
  content: "";
  position: absolute;
  bottom: -20px;
  left: 50px;
  width: 30px;
  height: 30px;
  background: linear-gradient(#8E4BA3, #2A294D); 
  border-radius: 30px;
}

.oval-dark:after{
  content: "";
  position: absolute;
  bottom: -50px;
  left: 80px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: linear-gradient(#8E4BA3, #2A294D); 
}



</style>

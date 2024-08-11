<template>
  <div v-if="historyData">
     <div v-for="item in historyData" :key="item">

          
          <div class="xl:grid grid-cols-2 gap-5 xl:gap-0 items-center text-center justify-center container mx-auto px-5 pt-20">

               <div class="flex items-center relative justify-center">
                    <div>
                         <!-- <h2 class="text-4xl text-gradient pb-10 move-in-right">{{ item.history_heading1 }}</h2> -->

                         <div v-if="isVisible" class="absolute hidden md:block z-20 md:top-1/8 md:right-10">
                              <p class="oval-thought2 text-slate-600 absolute top-0">I can feel evil forces stirring...</p>
                         </div>
                         
                         <div @click="toggleVisibility" class="md:hover:scale-105 md:cursor-pointer duration-500 flex justify-center">
                              <img class="md:w-96 w-64 h-full move-in-right" :src="item.history_image1" alt="Arkivaren, the wizard also known as 'The Archivist,' handling ancient spell books and secret scrolls with supreme wisdom">
                         </div>
                    </div>
               </div>

               <div>
              
                    <div class="move-in-left">
                         <p class="mt-5 md:text-2xl" v-html="highlightWords(item.history_intro1)"></p>
                         
                         <p class="mt-5 md:text-2xl">{{ item.history_intro2 }}</p>
                         
                         <p class="mt-5 md:text-2xl" v-html="highlightWords(item.history_intro3)"></p>

                         <p class="mt-5 md:text-2xl">{{ item.history_intro4 }}</p>
                    </div>
              
               </div>

          </div>


          <div class="xl:grid grid-cols-2 md:gap-20 items-center text-center justify-center container mx-auto px-5">

               <div class="xl:hidden flex items-center justify-center">
                    <div>
                         <h2 class="text-gradient text-3xl text-center pb-5 pt-32 move-in-right">{{ item.history_heading2 }}</h2>

                         <div v-if="isVisible" class="absolute hidden md:block z-20 md:top-1/8 md:right-10">
                              <p class="oval-thought absolute top-0">We have to do something...</p>
                         </div>
                         <div class="move-in-left flex justify-center">
                              <img class="w-full h-full" :src="item.history_image2" alt="The four guardians of the sea, majestic and vigilant, each embodying the power and grace of the ocean depths">
                         </div>
                    </div>
               </div>


               <div class="move-in-right">
               <p class="text-center md:text-2xl pb-5">{{ item.history_intro5 }}</p>

               <p class="text-center md:text-2xl pb-5" v-html="highlightWords(item.history_intro6)"></p>
          
               <p class="text-center md:text-2xl pb-5">{{ item.history_intro7 }}</p>

               <p class="text-3xl uppercase ">It's time for Fantasy Quest Esbjerg.</p>
               <p class="text-orange-500 font-bold uppercase text-3xl md:text-4xl custom-p">Are you ready?</p>

               </div>

               <div class="xl:flex hidden items-center justify-center">
                    <div class="relative">
                         <h2 class="text-gradient md:text-4xl text-center pb-5 pt-32 move-in-left">{{ item.history_heading2 }}</h2>

                         <div v-if="isVisible2" class="absolute hidden md:block z-20 md:top-52  md:right-0">
                              <p class="oval-thought text-slate-600 absolute top-0">...but now we really have to defend the city!</p>
                         </div>

                         <div class="hover:scale-105 duration-500 cursor-pointer">
                              <img class="move-in-left w-full h-full" @click="toggleVisibility2" :src="item.history_image2" alt="The four guardians of the sea, majestic and vigilant, each embodying the power and grace of the ocean depths">
                         </div>

                    </div>
               </div>

          </div>

          <div class="flex flex-col justify-center items-center lg:flex-row lg:flex-wrap md:flex-row md:flex-wrap">
               <div v-for="card in filteredCards" :key="card.title" :id="card.id" class="moving-border w-72 h-auto  mt-4  bg-gray-900 sm:mb-2  p-2 m-5 rounded-lg shadow flex justify-start items-start flex-col">
            <a @click="openModal(card)">
              <img class="rounded-lg  hover:scale-[101%] " :src="card.image" alt="">
            </a>
            <div class="p-5">
              <h5 class=" text-3xl mt-4 font-black tracking-tight text-white">{{ card.title }}</h5>
              <p class="mb-2 text-md font-light tracking-tight text-white">{{ card.about }}</p>
              <button @click="openModal(card)" class=" hover:scale-110 mt-5  hover:text-rose-300 text-orange-200 text-xl ">{{ card.button }}</button>
            </div>
            <!-- modal here -->
              <div v-if="card.modalVisible" class="fixed inset-0 z-50 overflow-y-auto">
                <div class="flex items-center justify-center bg-black mt-16 bg-opacity-50 h-auto">
                  <div class="bg-black bg-opacity-65 p-10 rounded-lg shadow-lg w-[55%] h-auto border-orange-500 border-2">
                    <div class="flex flex-col justify-center py-5">
                      <p class="mb-2 text-lg font-semibold text-left">{{ card.modal.title }}</p>
                      <div class="flex flex-row justify-center mb-20">
                        <img class="w-96 rounded-lg" :src="card.image" alt="">
                      
                      </div>
                      <h1 class="mb-10">{{ card.modal.description }}</h1>
                      
                      <div class="flex justify-center items-center"></div>
                     
                      
                      <button @click="closeModal(card)" class="text-xl font-bold mt-5 hover:text-rose-300 text-orange-200">//Close</button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
          </div>
          


          <h3 class="text-center md:text-5xl text-3xl pt-24 mb-10 text-gradient fade-in">This is how you join the Quests</h3>

          <div class="xl:grid grid-cols-2 gap-10 container mx-auto px-5 fade-in">

               <div class="flex justify-center">
                    <img class="w-full h-auto object-cover" :src="item.join_quest_image" alt="Join the quest and journey into realms of magic, mystery, and endless possibility">
               </div>


               <div>

               <p class="md:text-2xl">{{ item.how_to_join1 }}</p>
               <p class="mt-5 md:text-2xl">{{ item.how_to_join2 }}</p>
               <p class="mt-5 md:text-2xl">{{ item.how_to_join3 }}</p>
                    <ul class="text-orange-500 md:text-3xl my-5 btn">
                         <li>{{ item.family_program }}</li>
                         <li>{{ item.night_program }}</li>
                    </ul>
               <p class="mt-5 md:text-sm text-[10px]">{{ item.how_to_join4 }}</p>
               <div class="pt-10">
                      <a target="_blank" class="fade-in" href="https://www.universe.com/explore?query=Fantasy%2520Quest&loc=Esbjerg%252C%2520Denmark&ll=55.476466%252C8.459405"><BuyButton/></a>
                </div>
          
               </div>
               

          </div>

     </div>
 </div>

 <div v-else>
    <p>Loading data...</p>
</div>

</template>

<script setup>
import { cards } from '../modules/portfolio.js';
import { ref, onMounted, computed } from 'vue'
import connectMe from '../modules/connectMe'
import BuyButton from './Buy-button.vue';
const { historyData,  fetchData } = connectMe()




onMounted(() => {
  fetchData()
})




const filteredCards = computed(() => {
  if (selectedCategory.value === 'all') {
    return cards.value;
  } else {
    return cards.value.filter(card => card.id === selectedCategory.value);
  }
});

// Define a ref for selected category
const selectedCategory = ref('all');



// modal function
const openModal = (card) => {
  // used to prevent body scrolling when modal is open
  document.body.classList.add('modal-open');
  card.modalVisible = true;
};

const closeModal = (card) => {
  // used to prevent body scrolling when modal is open
  document.body.classList.remove('modal-open');
  card.modalVisible = false;
};

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
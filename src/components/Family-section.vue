<template>
  <div v-if="familyData">
    <div v-for="(item, index) in familyData" :key="index">
      <h1 class="md:text-5xl text-xl container mx-auto move-in-right text-yellow-500 text-gradient text-center pt-20">{{ item.headline1 }}</h1>
      
      <div class="grid grid-cols-1 xl:grid-cols-2 container mx-auto pt-10 gap-10">
        <div class="move-in-right">
          <p class="pb-5 md:text-2xl" v-html="highlightWords(item.intro1)"></p>
          <p class="pb-5 md:text-2xl" v-html="highlightWords(item.intro2)"></p>
          <p class="pb-5 md:text-2xl" v-html="highlightWords(item.intro3)"></p>
          <p class="md:text-2xl" v-html="highlightWords(item.intro4)"></p>
        </div>
        <div class="flex justify-center move-in-left items-center">
          <img class="w-full" :src="item.image1" alt="Children listening attentively to a fairy tale told by a princess in a costume">
        </div>
      </div>

      <div class="pt-10">
        <a target="_blank" class="fade-in" href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3"><BuyButton/></a>
      </div>
      
      <div class="grid grid-cols-1 xl:grid-cols-2 container pt-10 md:pt-28 mx-auto gap-10 pb-20">
        <div class="flex move-in-right justify-center items-center">
          <img class="w-full" :src="item.image2" alt="A princess in costume telling a fairy tale to a group of children">
        </div>
        <div class="move-in-left">
          <p class="pb-5 md:text-2xl">{{ item.info1 }}</p>
          <p class="pb-5 md:text-2xl">{{ item.info2 }}</p>
          <p class="pb-5 md:text-2xl">{{ item.info3 }}</p>
          <p class="md:text-2xl" v-html="highlightWords(item.info4)"></p>
          <ul class="text-center text-sm md:text-4xl my-5 btn">
            <li>The Family Quest:</li>
            <li class="text-gradient">{{ item.schedule }}</li>
            <li class="md:text-sm text-[10px]">The quest takes approx. one hour to complete.</li>
          </ul>
        </div>
      </div>

      <!-- Portal Setup Mobile -->
      <div class="wrapper block md:hidden pt-5">
        <p class="text-center text-3xl text-gradient pb-5">Where is the starting point?</p>
        <div class="container mx-auto grid grid-cols-1 items-center">
          <div class="flex justify-center" @click="toggleVisibility2">
            <img class="w-full h-full" :src="item.gnist_mobile" alt="Elf with pointed ears and mystical attire standing in a forest glade">
          </div>
        </div>
        <div class="container mx-auto grid grid-cols-1 items-center">
          <div class="md:pt-0 py-5">
           <a class="fade-in" target="_blank" href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4">
            <BuyButton />
           </a>
        </div>
          <div class="relative flex justify-center">
            <img class="w-96" :src="item.portal" alt="Enchanting portal shimmering with otherworldly light, beckoning adventurers to step into realms unknown.">
            <img @click="toggleVisibility(index)" :src="item.questionmark" alt="here is a clue" class="absolute cursor-pointer animate-pulse w-10 hover:scale-110 duration-500 top-1/2 left-[52%] transform -translate-y-0 ">
            <div @click="toggleVisibility(index)" v-show="visibleDiv === index" class="md:w-96 w-72 cursor-pointer absolute top-1/4 bg-gradient-to-b from-[#55B6B5] to-[#184147] text-slate-200 rounded-3xl flex flex-col items-center mb-2">
              <p class="text-xl flex flex-col items-center p-5">
                {{ item.riddle }}
                <img class="w-32 pt-5 text-center" :src="item.unicorn" alt="Majestic unicorn with a flowing mane and horn, standing in a mystical forest clearing">
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
            <img class="w-full" :src="item.portal" alt="Enchanting portal shimmering with otherworldly light, beckoning adventurers to step into realms unknown">
            <img @click="toggleVisibility(index)" :src="item.questionmark" alt="here is a clue" class="absolute cursor-pointer animate-pulse w-5 md:w-10 xl:w-20 hover:scale-90 xl:scale-75 duration-500 top-1/2 left-1/2 transform -translate-x-1/8 -translate-y-1/4">
            <div @click="toggleVisibility(index)" v-show="visibleDiv === index" class="md:w-96 w-72 cursor-pointer absolute top-44 bg-gradient-to-b from-[#55B6B5] to-[#184147] text-slate-200 rounded-3xl flex flex-col items-center mb-2">
              <p class="text-xl flex flex-col items-center p-5">
                {{ item.riddle }}
                <img class="w-44 pt-5 text-center" :src="item.unicorn" alt="Majestic unicorn with a flowing mane and horn, standing in a mystical forest clearing">
              </p>
            </div>
          </div>
          <div class="text-center">
            <div class="md:text-xl animate-pulse text-sm hover:scale-105 duration-500 cursor-pointer" @click="toggleVisibility2"><p>See the clue</p></div> 
          </div>
          <div class="relative move-in-left">
            <div v-if="isVisible" class="absolute hidden xl:block z-20 md:top-0 md:left-32">
              <p class="oval-family bg-gradient-to-b from-[#D8CC95] to-[#739789] absolute text-slate-800 top-0">You have to open the Portal to find the clue</p>
            </div>
            <div class="flex justify-start">
              <img :src="item.gnist" alt="Elf with pointed ears and mystical attire standing in a forest glade">
            </div>
          </div>
        </div>
      </div>
      <!-- Portal Setup Desktop END -->

      <!-- Lakserytteren -->
      <h1 class="text-3xl md:text-5xl container mx-auto text-yellow-500 text-gradient text-center mt-28 pt-28 md:mb-10 mb-0 fade-in">{{ item.headline2 }}</h1>
      <div class="grid grid-cols-1 xl:grid-cols-2 container mx-auto pt-0 gap-10 md:pb-32 pb-10 fade-in">
        <div>
          <p class="pb-5 md:text-2xl" v-html="highlightWords(item.salmon1)"></p>
          <p class="pb-5 md:text-2xl" v-html="highlightWords(item.salmon2)"></p>
          <p class="pb-5 md:text-2xl" v-html="highlightWords(item.salmon3)"></p>
          <p class="md:text-2xl" v-html="highlightWords(item.salmon4)"></p>
          <div class="pt-10">
              <a target="_blank" class="fade-in hidden md:block" href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3"><BuyButton/></a>
          </div>
        </div>
        <div class="flex justify-center items-center">
          <img class="w-4/5" :src="item.image3" alt="Lakserytteren, the electrifying performer, captivating audiences with daring stunts and mesmerizing artistry">
        </div>
        <div class="pt-10 md:hidden">
              <a target="_blank" class="fade-in" href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3"><BuyButton/></a>
        </div>
      </div>
    </div>
  </div>
  
  <div v-else>
    <p>Loading data...</p>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import BuyButton from '../components/Buy-button.vue';
import connectMe from '../modules/connectMe';

const { familyData, fetchData } = connectMe();

onMounted(() => {
  fetchData();
});

const isVisible = ref(false);
const toggleVisibility2 = () => {
  isVisible.value = !isVisible.value;
};

const visibleDiv = ref(null);
const toggleVisibility = (index) => {
  visibleDiv.value = visibleDiv.value === index ? null : index;
};

// Highlighter function
const highlightWords = (text) => {
  const wordsToHighlight = [
    'magical story',
    'challenges along the way',
    'cooperation skills',
    'save Esbjerg',
    'you can meet the YouTuber Salmon Rider',
    'Saturday 14 September 2024',
    "Fantasy festival's 10th anniversary",
    'Rasmus Kolbe',
    'Salmon Rider',
    'meet him'
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
@keyframes pulse {
  50% {
    opacity: .6;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}

p {
  line-height: normal;
}



.oval-family{
  // border: 2px solid #39317E;
  position: relative;
  width: 250px;
  padding: 20px 40px;
  margin: 1em auto 0px;
  text-align: center;
  border-radius: 220px / 120px;     
}

.oval-family:before{
  content: "";
  position: absolute;
  bottom: -20px;
  left: 50px;
  width: 30px;
  height: 30px;
  background: linear-gradient(#D8CC95, #739789); 
  border-radius: 30px;
}

.oval-family:after{
  content: "";
  position: absolute;
  bottom: -50px;
  left: 80px;
  width: 15px;
  height: 15px;
  border-radius: 15px;
  background: linear-gradient(#D8CC95, #739789); 
}

</style>

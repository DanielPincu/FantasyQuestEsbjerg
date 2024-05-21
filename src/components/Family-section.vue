<template>
<div v-if="familyData">
    <div v-for="item in familyData" :key="item">
       
       <h1 class="md:text-5xl text-xl container mx-auto text-yellow-500 text-gradient text-center pt-20">{{ item.headline1 }}</h1>
       
       <div class="grid grid-cols-1 md:grid-cols-2 container mx-auto pt-10 gap-10 pb-28">
           <div class="md:pt-10">
               <p class="pb-5 md:text-3xl" v-html="highlightWords(item.intro1)"></p>
      
              <p class="pb-5 md:text-3xl" v-html="highlightWords(item.intro2)"></p>
      
               <p class="pb-5 md:text-3xl" v-html="highlightWords(item.intro3)"></p>
      
               <p class="md:text-3xl" v-html="highlightWords(item.intro4)"></p>
          </div>
      
          <div class="flex justify-center items-center">
              <img :src="item.image1" alt="">
          </div>
             
      </div>
      
      <BuyButton />
      
      <div class="grid grid-cols-1 md:grid-cols-2 container pt-28 mx-auto gap-10">
           
      
          <div class="flex justify-center items-center">
              <img :src="item.image2" alt="">
          </div>
             
          <div class="xl:pt-10 pt-0">
               <p class="pb-5  md:text-3xl">{{ item.info1 }}</p>
      
              <p class="pb-5  md:text-3xl">{{ item.info2 }}</p>
      
               <p class="pb-5  md:text-3xl">{{ item.info3 }}</p>
      
               <p class=" md:text-3xl" v-html="highlightWords(item.info4)"></p>
               
               <ul class="text-center text-sm md:text-4xl my-5 btn">
                      <li>The Family Quest:</li>
                      <li class="text-gradient">{{ item.schedule }}</li>            
              </ul>
          </div>
      
      </div>
      

      
      
      
      <div class="container mx-auto grid grid-cols-3 pt-32 items-center">
      
        <div class="relative">

          <img src="../assets/img/port.png">
          <img @click="toggleVisibility(index)" src="../assets/img/question.png" class="absolute cursor-pointer animate-pulse w-5 md:w-10 xl:w-20 hover:scale-110 duration-500 top-1/2 left-1/2 transform -translate-x-1/8 -translate-y-1/4">
          
          <div @click="toggleVisibility(index)" v-show="visibleDiv === index" class="md:w-96 w-72 cursor-pointer absolute top-1/2 bg-blue-300 dark:bg-red-300 rounded-3xl drop-shadow-xl flex flex-col items-center mb-2">
            <p class="text-xl p-5">
              In a forest deep, where shadows creep,And the moonlight rarely peeks,
              There lies a key to your heart’s desire,
              Guarded by flame, yet not by fire.

              Seek the stone with markings old,
              Amidst the tales of legends told.
              Turn the gem of emerald bright,
              To face the dawn and catch its light.

              Answer this, brave soul, so true:
              What creature am I, who guards the clue?
            </p>

          </div>

        </div>  

          <div class="text-center"><p>IDK</p></div>
          <img src="../assets/img/gnist.png" alt="">
      
      
      </div>
      
      
      <!-- Lakserytteren -->
      <h1 class="text-xl md:text-5xl container mx-auto text-yellow-500 text-gradient text-center mt-28 pt-28 mb-10">{{ item.headline2 }}</h1>
      
      <div class="grid grid-cols-1 md:grid-cols-2 container mx-auto pt-10 gap-10 pb-32">
           <div>
               <p class="pb-5  md:text-3xl" v-html="highlightWords(item.salmon1)"></p>
      
              <p class="pb-5  md:text-3xl" v-html="highlightWords(item.salmon2)"></p>
      
               <p class="pb-5  md:text-3xl" v-html="highlightWords(item.salmon3)"></p>
      
               <p class=" md:text-3xl">{{ item.salmon4 }}</p>
          </div>
      
          <div class="flex justify-center items-center">
              <img :src="item.image3" alt="">
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
import BuyButton from '../components/Buy-button.vue'
import connectMe from '../modules/connectMe'

const { familyData,  fetchData } = connectMe()
  
  onMounted(() => {
    fetchData()
  })

const visibleDiv = ref(null);
const toggleVisibility = (index) => {
  visibleDiv.value = visibleDiv.value === index ? null : index;
};

// Hightlighter

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
'Salmon Rider'

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

</style>
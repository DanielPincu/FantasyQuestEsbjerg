<template>
   <div v-if="nightData">

    <div v-for="item in nightData" :key="item">
            <h1 class="md:text-5xl text-xl container mx-auto text-yellow-500 text-gradient text-center pt-20">For those of you who love solving mysteries</h1>

        <div class="relative">
            <img class="absolute right-0 top-80 z-10 opacity-50 md:opacity-100" src="../assets/img/thunder.png" alt="">

            <div class="md:grid grid-cols-2 mt-20 container mx-auto">

                <div class="relative z-20">
                    <p class="pb-10 text-sm md:text-3xl" v-html="highlightWords(item.intro1)"></p>

                    <p class="pb-10 text-sm md:text-3xl" v-html="highlightWords(item.intro2)"></p>

                    <p class="pb-10 text-sm md:text-3xl">{{ item.intro3 }}</p>

                    <p class="pb-10 text-sm md:text-3xl">{{ item.intro4 }}</p>

                </div>

            <div>
                <img class="scale-x-[-1]" :src="item.image1" alt="">
            </div>


            </div>
        </div>

        
            
            
            



        <BuyButton />


        <div class="relative">
            <img class="absolute left-0 top-0 z-10 opacity-30 md:opacity-100 scale-x-[-1]" src="../assets/img/thunder.png" alt="">

            <div class="md:grid grid-cols-12 mt-20 container mx-auto">

                <div class="col-span-6">
                    
                </div>

                <div class="relative z-20 col-span-6">
                    <p class="pb-5 md:text-3xl">{{ item.info1 }}</p>


                    <p class="pb-5 md:text-3xl font-bold">{{ item.info2 }}</p>

                    <p class=" md:text-3xl" v-html="highlightWords(item.info3)"></p>
                    
                    <ul class="text-center text-sm md:text-4xl my-5 btn">
                            <li>The Evening Quest:</li>
                            <li class="text-gradient">{{ item.schedule }}</li> 
                            <lic class="md:text-sm text-[10px]">The quest takes approx. one hour to complete.</lic>           
                    </ul>
                </div>

            </div>
        </div>



        <div class="container mx-auto grid grid-cols-3 pt-32 items-center">
            
            <div class="relative">

                <img src="../assets/img/port.png">
                <img @click="toggleVisibility(index)" src="../assets/img/question.png" class="absolute cursor-pointer animate-pulse w-5 md:w-10 xl:w-20 hover:scale-110 duration-500 top-1/2 left-1/2 transform -translate-x-1/8 -translate-y-1/4">
                
                <div @click="toggleVisibility(index)" v-show="visibleDiv === index" class="md:w-96 w-72 cursor-pointer absolute top-1/2 bg-blue-300 rounded-3xl drop-shadow-xl flex flex-col items-center mb-2">
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


    </div>
   </div>

   <div v-else>
         <p>Loading...</p>
   </div>


</template>








<script setup>
import { ref, onMounted } from 'vue'
import BuyButton from '../components/Buy-button.vue'
import connectMe from '../modules/connectMe'
const { nightData,  fetchData } = connectMe()
  
  onMounted(() => {
    fetchData()
  })

// Hightlighter

const highlightWords = (text) => {
const wordsToHighlight = [

'difficulty',
'turned up',
'courage, cooperation and ingenuity',
'14 September 2024'


];


let highlightedText = text;
wordsToHighlight.forEach(word => {
  const regEx = new RegExp('\\b' + word + '\\b', 'gi');
  highlightedText = highlightedText.replace(regEx, `<span class="text-yellow-500 text-xl md:text-3xl">${word}</span>`);
});
return highlightedText;
}

// Highlighter ends

const visibleDiv = ref(null);
const toggleVisibility = (index) => {
  visibleDiv.value = visibleDiv.value === index ? null : index;
};

</script>



<style lang="scss" scoped>
    p {
        line-height: normal;
      }


.thunder {
       
       background-image: url('../assets/img/thunder.png');
       
       background-repeat: no-repeat;
       background-position: center;
       
       
          }
     p {
       line-height: normal;
       }

</style>
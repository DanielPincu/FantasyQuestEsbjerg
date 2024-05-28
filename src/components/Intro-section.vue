<template>

<div v-if="introData">

    <div v-for="item in introData" :key="item">

        <div class="md:text-[18px] text-justify tracking-tighter flex flex-col items-center pt-5 md:pt-20 justify-center container mx-auto">
            <p class="mx-5 md:text-3xl" v-html="highlightWords(item.intro1)"></p>
            <br>
            <div class="move-in-right">
                <h1 class="text-center text-gradient text-4xl md:text-5xl uppercase pt-5 md:pt-24 pb-10">{{item.event_name}}</h1>
                <p class="pb-5 pt-5 mx-5" v-html="highlightWords(item.intro3)"></p>
                <p class="pb-5 mx-5" v-html="highlightWords(item.intro2)"></p>
                <p class="pb-20 mx-5" v-html="highlightWords(item.intro4)"></p>
            </div>
        </div>

        <div class="grid grid-cols-2 container mx-auto">

            <div @click="toggleVisibility('family')" :class="{ 'bg-yellow-500 bg-opacity-30 border-4 border-yellow-500': isFamilyVisible, 'hover:bg-yellow-500 hover:bg-opacity-50 border-4 hover:border-4 border-yellow-500 hover:border-yellow-500 duration-100': !isFamilyVisible }" class="button md:text-[18px] uppercase duration-100 h-10 mx-5 flex justify-center items-center"><p class="text-slate-50">Family Quest</p></div>

            <div @click="toggleVisibility('night')" :class="{ 'bg-orange-500 bg-opacity-30 border-4 border-orange-500': isNightVisible, 'hover:bg-orange-500 hover:bg-opacity-50 border-4 hover:border-4 border-orange-500 hover:border-orange-500 duration-100': !isNightVisible }" class="button duration-100 h-10 mx-5 flex md:text-[18px] justify-center items-center uppercase"><p class="text-slate-50">Night Quest</p></div>

        </div>

        <transition name="bounce">
            <div v-if="isFamilyVisible" id="family">
                <div class="flex container mx-auto justify-center pb-5">
                    <img class="px-5 w-full h-full" :src="item.family_quest_image" alt="Children listening attentively to a fairy tale told by a princess in a costume">
                </div>
                <div class="container pb-20 text-justify mx-auto">
                    <p class="mx-5 md:text-2xl md:col-span-12  col-span-12 pb-5">{{ item.family_intro }}</p>

                <div class="md:grid grid-cols-12 pt-5">
                        <div class="col-span-6 text-center flex justify-center items-center">
                            <ul>
                               <li> <RouterLink class="text-slate-300 hover:text-orange-500 font-medium px-3 py-2  transition-all duration-300" to="/family-quest"><ReadButton /></RouterLink></li>
                            </ul>
                        </div>


                        <div class="col-span-6 pt-10 md:pt-5">
                            <a target="_blank" href="https://www.universe.com/events/family-quest-dagquest-tickets-C6PYX3"><BuyButton/></a> 
                        </div>
                </div>

                
                </div>
            </div>
        </transition>

        <transition name="bounce">
            <div v-if="isNightVisible" id="night">
                <div class="flex container mx-auto justify-center pb-5">
                    <img class="px-5 w-full h-full" :src="item.night_quest_image" alt="Step into the shadows of a nocturnal fantasy quest, where darkness conceals both danger and secrets waiting to be uncovered">
                </div>
                <div class="container pb-20 text-justify mx-auto">
                    <p class="mx-5 md:text-2xl md:col-span-12 col-span-12 pb-5">{{ item.night_intro }}</p>

                <div class="md:grid grid-cols-12 pt-5">
                    <div class="col-span-6 text-center flex justify-center items-center">
                            <ul>
                                <li><RouterLink class="text-slate-300 hover:text-orange-500 font-medium px-3 py-2  transition-all duration-300" to="/night-quest"><ReadButton /></RouterLink></li>
                            </ul>
                        </div>



                        <div class="col-span-6 pt-10 md:pt-5">
                            <a target="_blank" href="https://www.universe.com/events/fantasy-quest-aftenquest-tickets-2PCHR4"><BuyButton/></a> 
                        </div>
                </div>

                
                </div>
            </div>
        </transition>  

    </div>

    </div>

<div v-else>
    <p>Loading data...</p>
</div>
   

<div class="relative">
    <div class="clouds overflow-hidden">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds, mist and fog" style="--i:1">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds, mist and fog" style="--i:2">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds, mist and fog" style="--i:3">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds, mist and fog" style="--i:4">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds, mist and fog" style="--i:5">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds, mist and fog" style="--i:6">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds, mist and fog" style="--i:7">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds, mist and fog" style="--i:8">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds, mist and fog" style="--i:9">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds, mist and fog" style="--i:10">
    </div>

    <div class="clouds2 flex justify-end overflow-hidden">
        <div>
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds, mist and fog" style="--i:1">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds, mist and fog" style="--i:2">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds, mist and fog" style="--i:3">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds, mist and fog" style="--i:4">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds, mist and fog" style="--i:5">
        <img src="../assets/img/clouds/cloud1.webp" alt="clouds, mist and fog" style="--i:6">
        <img src="../assets/img/clouds/cloud2.webp" alt="clouds, mist and fog" style="--i:7">
        <img src="../assets/img/clouds/cloud3.webp" alt="clouds, mist and fog" style="--i:8">
        <img src="../assets/img/clouds/cloud4.webp" alt="clouds, mist and fog" style="--i:9">
        <img src="../assets/img/clouds/cloud5.webp" alt="clouds, mist and fog" style="--i:10">
        </div>
    </div>

    <div class="flex justify-end">
        <img class="w-full h-full" src="../assets/img/clouds/banner.webp" alt="clouds, mist and fog">
    </div>
    
</div>


</template>

<script setup>

import { ref, onMounted } from 'vue'
import connectMe from '../modules/connectMe'
import anime from 'animejs/lib/anime.es.js';
import BuyButton from '../components/Buy-button.vue'
import ReadButton from './Read-button.vue'

const { introData,  fetchData } = connectMe()

onMounted(() => {
  anime({
    targets: '.animate-me',
    rotate: '1turn',
    duration: 2000
  });
});



onMounted(() => {
  fetchData()
})




const isFamilyVisible = ref(true)
const isNightVisible = ref(false)

const toggleVisibility = (target) => {
    if (target === 'family') {
        isFamilyVisible.value = true
        isNightVisible.value = false
    } else if (target === 'night') {
        isFamilyVisible.value = false
        isNightVisible.value = true
    }
}



// Hightlighter

const highlightWords = (text) => {
const wordsToHighlight = [

'magical universe',
'YOU ARE THE HERO',
'evening edition',
'family-friendly edition',
'YouTuber Lakserytteren',



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
.bounce-enter-active {
  animation: bounce-in 0.5s;
}

@keyframes bounce-in {
  0% {
    transform: scale(0.9);
  }
  50% {
    transform: scale(1);
  }
  100% {
    transform: scale(1);
  }
}


p {
        line-height: normal;
      }


</style>

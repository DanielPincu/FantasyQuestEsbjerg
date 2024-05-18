<template>

<div v-if="introData">

    <div v-for="item in introData" :key="item">

        <div class="md:text-3xl text-sm italic text-justify tracking-tighter flex flex-col items-center pt-20 justify-center container mx-auto">
            <p class="mx-5 md:text-3xl text-sm" v-html="highlightWords(item.intro1)"></p>
            <br>
            <h1 class="text-center text-4xl md:text-[2.5em] pt-24 text-gradient pb-10">{{item.event_name}}</h1>
            <p class="pb-5 pt-5 mx-5" v-html="highlightWords(item.intro3)"></p>
            <p class="pb-5 mx-5" v-html="highlightWords(item.intro2)"></p>
            <p class="pb-20 mx-5" v-html="highlightWords(item.intro4)"></p>
        </div>

        <div class="grid grid-cols-2 grid-rows-2 container mx-auto">

            <div @click="toggleVisibility('family')" :class="{ 'bg-yellow-500 bg-opacity-50 border-4 border-yellow-500': isFamilyVisible, 'hover:bg-yellow-500 border-4 hover:border-4 border-yellow-500 hover:border-yellow-500 duration-100': !isFamilyVisible }" class="button duration-100 h-10 mx-5 flex justify-center items-center">Family Quest</div>

            <div @click="toggleVisibility('night')" :class="{ 'bg-yellow-500 bg-opacity-50 border-4 border-yellow-500': isNightVisible, 'hover:bg-yellow-500 border-4 hover:border-4 border-yellow-500 hover:border-yellow-500 duration-100': !isNightVisible }" class="button duration-100 h-10 mx-5 flex justify-center items-center">Night Quest</div>

        </div>

        <transition name="bounce">
            <div v-if="isFamilyVisible" id="family">
                <div class="flex container mx-auto justify-center pb-5">
                    <img class="px-5" :src="item.family_quest_image" alt="">
                </div>
                <div class="container pb-20 text-justify mx-auto">
                    <p class="mx-5 md:text-2xl text-sm md:col-span-12 col-span-12 pb-5">{{ item.family_intro }}</p>

                <div class="md:grid grid-cols-12 pt-5">
                        <div class="col-span-6 text-center flex justify-center items-center">
                            <ul>
                                <RouterLink class="text-slate-300 hover:text-orange-500 font-medium px-3 py-2  transition-all duration-300" to="/family-quest"><li><span>Read more</span></li></RouterLink>
                                
                            </ul>
                        </div>


                        <div class="col-span-6 pt-10 md:pt-5">
                            <BuyButton /> 
                        </div>
                </div>

                
                </div>
            </div>
        </transition>

        <transition name="bounce">
            <div v-if="isNightVisible" id="night">
                <div class="flex container mx-auto justify-center pb-5">
                    <img class="px-5" :src="item.night_quest_image" alt="">
                </div>
                <div class="container pb-20 text-justify mx-auto">
                    <p class="mx-5 md:text-2xl text-sm md:col-span-12 col-span-12 pb-5">{{ item.night_intro }}</p>

                <div class="md:grid grid-cols-12 pt-5">
                    <div class="col-span-6 text-center flex justify-center items-center">
                            <ul>
                                <RouterLink class="text-slate-300 hover:text-orange-500 font-medium px-3 py-2  transition-all duration-300" to="/night-quest"><li><span>Read more</span></li></RouterLink>
                                
                            </ul>
                        </div>



                        <div class="col-span-6 pt-10 md:pt-5">
                            <BuyButton />  
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

    <div class="clouds2 flex justify-end overflow-hidden">
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

    <div class="flex justify-end">
        <img src="../assets/img/cloud3.png" alt="">
    </div>
    
</div>


</template>

<script setup>

import { onMounted } from 'vue'

import connectMe from '../modules/connectMe'
const { introData,  fetchData } = connectMe()


onMounted(() => {
  fetchData()
})

import { ref } from 'vue'
import BuyButton from '../components/Buy-button.vue'


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






ul {
    padding: 0;
    list-style-type: none;
}

li {
    font-size: 25px;
    width: 8em;
    height: 2em;
    color: orange;
    border-left: 0.08em solid;
    position: relative;
    margin-top: 0.8em;
    cursor: pointer;
}

li::before,
li::after
 {
    content: '';
    position: absolute;
    width: inherit;
    border-left: inherit;
    z-index: -1;
}

li::before {
    height: 80%;
    top: 10%;
    left: calc(-0.15em - 0.08em * 2);
    filter: brightness(0.8);
}

li::after {
    height: 60%;
    top: 20%;
    left: calc(-0.15em * 2 - 0.08em * 3);
    filter: brightness(0.6);
}

li span {
    position: relative;
    height: 120%;
    top: -10%;
    box-sizing: border-box;
    border: 0.08em solid;
    background-color: #333;
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: sans-serif;
    text-transform: capitalize;
    transform: translateX(calc(-0.15em * 3 - 0.08em * 2));
    transition: 0.3s;
}

li:hover span {
    transform: translateX(0.15em);
}

p {
        line-height: normal;
      }


</style>

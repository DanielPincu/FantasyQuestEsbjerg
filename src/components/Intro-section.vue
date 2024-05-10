<template>
    <div class="text-2xl italic text-justify tracking-tighter flex flex-col items-center pt-52  justify-center container mx-auto">
        <p class="mx-5">The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together  with a mission</p>
        <br>
        <p class="mx-5">In 2024, Fantasy Quest Esbjerg will have both a <span class="text-orange-500 text-3xl">difficult evening</span> edition and a <span class="text-orange-500 text-3xl">family-friendly</span> edition during the day during the Fantasy Festival, written in collaboration with the YouTuber Lakserytteren, where everyone can participate.</p>

        <h1 class="text-center text-4xl md:text-[2.5em] pt-24 pb-10">Fantasy Quest Esbjerg</h1>
        <p class="pb-20 mx-5">Are you ready to live into another world, a magical story where you are the hero who is on a "quest" to overcome the evil forces and save the whole world? So get ready for Fantasy Quest Esbjerg.</p>
    </div>

    <div class="grid grid-cols-2 grid-rows-2 container mx-auto">
        <div @click="toggleVisibility('family')" :class="{ 'bg-orange-500': isFamilyVisible, 'hover:bg-orange-500 border-2 hover:border-4 border-orange-500 hover:border-black duration-100': !isFamilyVisible }" class="button duration-100 h-10 mx-5 flex justify-center items-center">Family Quest</div>
        <div @click="toggleVisibility('night')" :class="{ 'bg-orange-500': isNightVisible, 'hover:bg-orange-500 border-2 hover:border-4 border-orange-500 hover:border-black duration-100': !isNightVisible }" class="button duration-100 h-10 mx-5 flex justify-center items-center">Night Quest</div>
    </div>

    <transition name="bounce">
        <div v-if="isFamilyVisible" id="family">
            <div class="flex container mx-auto justify-center pb-20">
                <img class="px-5" src="../assets/img/family.webp" alt="">
            </div>
            <div class="container text-2xl pb-20 text-justify mx-auto">
                <p class="mx-5 md:col-span-12 col-span-12 pb-5">The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt.</p>

               <div class="md:grid grid-cols-12 pt-5">
                    <div class="col-span-6 text-center flex justify-center items-center">
                        <ul>
                            <li><span><RouterLink class="text-slate-300 hover:text-orange-500 font-medium px-3 py-2  transition-all duration-300" to="/family-quest">Read more</RouterLink></span></li>
                        </ul>
                    </div>


                    <div class="col-span-6 pt-10 md:pt-0">
                        <BuyButton />  
                    </div>
               </div>

               
            </div>
        </div>
    </transition>

    <transition name="bounce">
        <div v-if="isNightVisible" id="night">
            <div class="flex container mx-auto justify-center pb-20">
                <img class="px-5" src="../assets/img/night.webp" alt="">
            </div>
            <div class="container text-2xl pb-20 text-justify mx-auto">
                <p class="mx-5 md:col-span-12 col-span-12 pb-5">The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt.</p>

               <div class="md:grid grid-cols-12 pt-5">
                    <div class="col-span-6 text-center flex justify-center items-center">
                        <ul>
                            <li><span><RouterLink class="text-slate-300 hover:text-orange-500 font-medium px-3 py-2  transition-all duration-300" to="/night-quest">Read more</RouterLink></span></li>
                        </ul>
                    </div>


                    <div class="col-span-6 pt-10 md:pt-0">
                        <BuyButton />  
                    </div>
               </div>

               
            </div>
        </div>
    </transition>
</template>

<script setup>
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


</style>

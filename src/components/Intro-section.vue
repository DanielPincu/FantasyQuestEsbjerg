<template>
    <div class="text-3xl italic text-justify tracking-tighter flex flex-col items-center md:pt-5 pt-44 justify-center container mx-auto">
        <p class="mx-5">Imagine "Prisoners at the Fort" with a lot of magic, some theatre and role playing, some heroes and villains and of course the battle between good and evil, then you are well on your way to Fantasy Quest Esbjerg.</p>
        <br>
        <p class="mx-5">In 2024, Fantasy Quest Esbjerg will have both a <span class="text-orange-500 text-4xl">difficult evening</span> edition and a <span class="text-orange-500 text-4xl">family-friendly</span> edition during the day during the Fantasy Festival, written in collaboration with the YouTuber Lakserytteren, where everyone can participate.</p>

        <h1 class="text-center text-[60px] pt-24 pb-10">Fantasy Quest Esbjerg</h1>
        <p class="pb-20 mx-5">Are you ready to live into another world, a magical story where you are the hero who is on a "quest" to overcome the evil forces and save the whole world? So get ready for Fantasy Quest Esbjerg.</p>
    </div>

   
    <div class="grid grid-cols-2 grid-rows-2 container mx-auto">
        <div @click="toggleVisibility('family')" class="button hover:bg-orange-500 border-2 hover:border-4 border-orange-500 hover:border-black duration-100 h-10 mx-5 flex justify-center items-center">Family Quest</div>
        <div @click="toggleVisibility('night')" class="button hover:bg-orange-500 border-2 hover:border-4 border-orange-500 hover:border-black duration-100 h-10 mx-5 flex justify-center items-center">Night Quest</div>
    </div>

    <transition name="bounce">
        <div v-if="isFamilyVisible" id="family">
            
            <div class="flex container mx-auto justify-center pb-20">
                <img class="px-5" src="../assets/img/family2.png" alt="">
            </div>

            <div class="grid grid-cols-12 container text-2xl pb-20 text-justify mx-auto">
                
                <p class="mx-5 md:col-span-8 col-span-12 pb-5">The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt.</p>

                <p class="mx-5 md:col-span-8 col-span-12 pb-5">Here you meet magical creatures who set you some tasks and challenges along the way towards the goal, which you must solve together to complete the Quest. The degree of difficulty has been lowered so that the children can help solve the tasks. But make no mistake, all good strength and cooperation skills are needed if you are to help save Esbjerg. </p>

                <div class="md:col-span-4 hidden col-span-12 md:flex justify-center items-center"> <!-- Added flex and centering classes -->
                    <BuyButton />   
                </div>

                <p class="mx-5 md:col-span-8 col-span-12 pb-10">As an added bonus, you can meet the YouTuber Salmon Rider during the Quest around the streets of Esbjerg.</p>

                <div class="md:col-span-4 md:hidden col-span-12 flex justify-center items-center"> <!-- Added flex and centering classes -->
                    <BuyButton />   
                </div>

            
            </div>

        </div>
    </transition>

    <transition name="bounce">
        <div v-if="isNightVisible" id="night">
            
            <div class="flex container mx-auto justify-center pb-20">
                <img class="px-5" src="../assets/img/family.png" alt="">
            </div>

            <div class="grid grid-cols-12 container text-2xl pb-20 text-justify mx-auto">
                
                <p class="mx-5 md:col-span-8 col-span-12 pb-5">The family edition of Fantasy Quest Esbjerg is an experience run for the whole family, with an emphasis on experience. Because it is not a classic race. It's about living into another world, a magical story, where you are on a "quest" together - a mission, a task, a hunt.</p>

                <p class="mx-5 md:col-span-8 col-span-12 pb-5">Here you meet magical creatures who set you some tasks and challenges along the way towards the goal, which you must solve together to complete the Quest. The degree of difficulty has been lowered so that the children can help solve the tasks. But make no mistake, all good strength and cooperation skills are needed if you are to help save Esbjerg. </p>

                <div class="md:col-span-4 hidden col-span-12 md:flex justify-center items-center"> <!-- Added flex and centering classes -->
                    <BuyButton />   
                </div>

                <p class="mx-5 md:col-span-8 col-span-12 pb-10">As an added bonus, you can meet the YouTuber Salmon Rider during the Quest around the streets of Esbjerg.</p>

                <div class="md:col-span-4 md:hidden col-span-12 flex justify-center items-center"> <!-- Added flex and centering classes -->
                    <BuyButton />   
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

<style scoped>

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




</style>
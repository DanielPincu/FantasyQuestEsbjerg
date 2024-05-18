<template>
     <h1 class="md:text-5xl text-xl container mx-auto text-yellow-500 text-gradient text-center pt-20">For those of you who love solving mysteries</h1>

<div class="relative">
    <img class="absolute right-0 top-80 z-10 opacity-50 md:opacity-100" src="../assets/img/thunder.png" alt="">

    <div class="md:grid grid-cols-2 mt-20 container mx-auto">

    <div class="relative z-20">
        <p class="pb-10 text-sm md:text-3xl">When twilight begins to descend over Esbjerg, the level of difficulty in the Evening Quest is turned up. </p>

        <p class="pb-10 text-sm md:text-3xl">Now you really have to think creatively and solve tasks that require both courage, cooperation and ingenuity in order for you to complete the quest and save Esbjerg.</p>

        <p class="pb-10 text-sm md:text-3xl">If you love solving puzzles and cracking codes, don't miss out on this ultimate experience. We send you and your friends on your ultimate adventure in Esbjerg's streets and alleys.</p>

        <p class="pb-10 text-sm md:text-3xl"> Here you will have to collaborate and devise new solutions to complete the AftenQuest.</p>

    </div>

    <div>
        <img class="scale-x-[-1]" src="../assets/img/nightquest.jpg" alt="">
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
            <p class="pb-5 md:text-3xl">Here you can continuously find the practical information about Fantasy Quest Esbjerg 2024.</p>


            <p class="pb-5 md:text-3xl font-bold">You don't have to be dressed, but you really want to be.</p>

            <p class=" md:text-3xl">The quest takes place on Saturday 14 September 2024 during Fantasy Festival.</p>
            
            <ul class="text-center text-sm md:text-4xl my-5 btn">
                    <li>The Evening Quest:</li>
                    <li class="text-gradient"> 18.00 - 22.00</li> 
                    <lic class="md:text-sm text-[10px]">The quest takes approx. one hour to complete.</lic>           
            </ul>
        </div>

    </div>
</div>



<div class="grid grid-cols-3 container mx-auto items-center">

    <img src="../assets/img/portal.png" alt="">
    <div class="text-center">Reveal Map</div>
    <img src="../assets/img/gnist.png" alt="">


</div>






</template>








<script setup>
import BuyButton from '../components/Buy-button.vue'

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
<template>
  
  
    <div>
  <h1 class="text-gradient text-4xl text-center pt-20">PRACTICAL INFORMATION</h1>
    </div>

    <div class="container mx-auto mt-10 py-10 bg-[#1A202C] rounded-3xl">
  
      <div id="accordionExample">
        <!-- Accordion Items -->
  
        <!-- Where and when -->
        <div>
          <!-- Accordion Header -->
          <h2 class="mb-0" :id="'heading0'">
            <button
              class="group relative flex w-full items-center border-t-2 border-yellow-500 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-[#1A202C] [&:not([data-twe-collapse-collapsed])]:text-slate-200 [&:not([data-twe-collapse-collapsed])] dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
              type="button"
              @click="toggleCollapse(0)"
              :aria-expanded="isExpanded(0)"
              :aria-controls="'collapse0'">
              <span class="md:text-3xl">Where and when?</span>
              <span
                class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
                :class="{ 'rotate-180': isExpanded(0) }">
                <svg class="text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :d="isExpanded(0) ? 'M0 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'" />
                </svg>
              </span>
            </button>
          </h2>
          <!-- Accordion Content -->
          <div class="bg-[#1A202C]"
            :class="{ '!visible': isExpanded(0), 'hidden': !isExpanded(0) }"
            data-twe-collapse-item
            :aria-labelledby="'heading0'"
            data-twe-parent="#accordionExample">
            <div class="px-5 py-4 text-slate-200">
              <p class="text-2xl">Fantasy Festival 2024 The fantasy festival is held 14-16 September 2024. <br> The fantasy festival is held at: Esbjerg Main Library (Nørregade 19,6700 Esbjerg) and around the city centre. <br> The fantasy festival is organized by Esbjerg Municipality Libraries in collaboration with various local and national associations, publishers and volunteers.</p>
            </div>
          </div>
        </div>
  
        <!-- Food and drinks -->
        <div>
          <!-- Accordion Header -->
          <h2 class="mb-0" :id="'heading1'">
            <button
              class="group relative flex w-full items-center border-t-2 border-yellow-500 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-[#1A202C] [&:not([data-twe-collapse-collapsed])]:text-slate-200 [&:not([data-twe-collapse-collapsed])] dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
              type="button"
              @click="toggleCollapse(1)"
              :aria-expanded="isExpanded(1)"
              :aria-controls="'collapse1'">
             <span class="md:text-3xl">Food and drinks</span>
              <span
                class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
                :class="{ 'rotate-180': isExpanded(1) }">
                <svg class="text-yellow-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    :d="isExpanded(1) ? 'M0 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'" />
                </svg>
              </span>
            </button>
          </h2>
          <!-- Accordion Content -->
          <div class="bg-[#1A202C]"
            :class="{ '!visible': isExpanded(1), 'hidden': !isExpanded(1) }"
            data-twe-collapse-item
            :aria-labelledby="'heading1'"
            data-twe-parent="#accordionExample">
            <div class="px-5 py-4 text-slate-200">
              <p class="text-2xl">For the Fantasy Festival, it is possible to enjoy brought food on the Market Square, as well as to buy food and drink. There are several food stalls on and near the Market Square and the International Dragon House, as well as the opportunity to buy food and drink from the many cafes etc. near the festival. There are also several stalls with different food and drink specialities. At the Market Place you will find:
                <ul class="text-center text-2xl font-bold">
                    <li>Bluesette</li>
                    <li>The bobble car</li>
                    <li>Café Memphis</li>
                    <li>The Dancing Dwarf</li>
                    <li>The Green Girl Scouts</li>
                    <li>Dragon Inn</li>
                    <li>The coffee cart</li>
                    <li>The Caramel Master</li>
                    <li>The wife with the eggs</li>
                    <li>Merry and Morten Villebøl</li>
                    <li>Mjolnir</li>
                    <li>The mead barn</li>
                    <li>Skjaldekroen</li>
                </ul>
              </p>
            </div>
          </div>
        </div>



         <!-- Transportation -->
      <div>
          <!-- Accordion Header -->
          <h2 class="mb-0" :id="'heading4'">
            <button
              class="group relative flex w-full items-center border-t-2 border-yellow-500 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-c-collapse-collapsed])]:bg-[#1A202C] [&:not([data-twe-collapse-collapsed])]:text-slate-200 [&:not([data-twe-collapse-collapsed])] dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
            type="button"
            @click="toggleCollapse(5)"
            :aria-expanded="isExpanded(5)"
            :aria-controls="'collapse2'">
            <span class="md:text-3xl">Transportation</span>
            <span
              class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
              :class="{ 'rotate-180': isExpanded(5) }">
              <svg class="text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="isExpanded(5) ? 'M0 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'" />
              </svg>
            </span>
          </button>
        </h2>
        <!-- Accordion Content -->
        <div class="bg-[#1A202C]"
          :class="{ '!visible': isExpanded(5), 'hidden': !isExpanded(5) }"
          data-twe-collapse-item
          :aria-labelledby="'heading2'"
          data-twe-parent="#accordionExample">
          <div class="px-5 py-4 text-slate-200">
          <p class="text-2xl">It is easy to take the train or your own car to Fantasyfestival. The main library, where the festival is held, is a 5-minute walk from the railway station.</p>
          <p class="text-xl pt-5">Free Parking</p>
          <p class="text-2xl">It is possible to park for free at the Museum Square, right next to the Main Library. The car park fills up quickly, so alternatively you can park in the places marked on the map below. The location of the fantasy festival is marked in red. Parking is free for the first two hours in Esbjerg city centre. In some places, parking is time-limited.</p>

          <p class="text-xl pt-5">Paid Parking</p>
          <p>There is also an excellent car park at Streetmekka Esbjerg/Sydvestjysk Sygehus. It is rarely full at weekends, and could therefore be a parking option.</p>

          </div>
        </div>
      </div>


        <!-- Overnight -->
        <div>
          <!-- Accordion Header -->
          <h2 class="mb-0" :id="'heading2'">
            <button
              class="group relative flex w-full items-center border-t-2 border-yellow-500 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-c-collapse-collapsed])]:bg-[#1A202C] [&:not([data-twe-collapse-collapsed])]:text-slate-200 [&:not([data-twe-collapse-collapsed])] dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
            type="button"
            @click="toggleCollapse(2)"
            :aria-expanded="isExpanded(2)"
            :aria-controls="'collapse2'">
            <span class="md:text-3xl">Overnight in Esbjerg</span>
            <span
              class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
              :class="{ 'rotate-180': isExpanded(2) }">
              <svg class="text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="isExpanded(2) ? 'M0 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'" />
              </svg>
            </span>
          </button>
        </h2>
        <!-- Accordion Content -->
        <div class="bg-[#1A202C]"
          :class="{ '!visible': isExpanded(2), 'hidden': !isExpanded(2) }"
          data-twe-collapse-item
          :aria-labelledby="'heading2'"
          data-twe-parent="#accordionExample">
          <div class="px-5 py-4 text-slate-200">
            <p class="text-2xl">Would you like to take the whole Fantasy Festival with you? <a class="text-yellow-500 hover:text-orange-500 hover:underline" target="_blank" href="https://www.lejebolig.dk/">See your options for accommodation in Esbjerg</a></p>
          </div>
        </div>
      </div>

   

      
      <!-- Partners -->
      <div>
          <!-- Accordion Header -->
          <h2 class="mb-0" :id="'heading3'">
            <button
              class="group relative flex w-full items-center border-t-2 border-yellow-500 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-c-collapse-collapsed])]:bg-[#1A202C] [&:not([data-twe-collapse-collapsed])]:text-slate-200 [&:not([data-twe-collapse-collapsed])] dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
            type="button"
            @click="toggleCollapse(3)"
            :aria-expanded="isExpanded(3)"
            :aria-controls="'collapse2'">
            <span class="md:text-3xl">Cooperation partners</span>
            <span
              class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
              :class="{ 'rotate-180': isExpanded(3) }">
              <svg class="text-yellow-500"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="isExpanded(3) ? 'M0 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'" />
              </svg>
            </span>
          </button>
        </h2>
        <!-- Accordion Content -->
        <div class="bg-[#1A202C]"
          :class="{ '!visible': isExpanded(3), 'hidden': !isExpanded(3) }"
          data-twe-collapse-item
          :aria-labelledby="'heading2'"
          data-twe-parent="#accordionExample">
          <div class="px-5 py-4 text-slate-200">
            <ul class="text-center text-2xl font-bold">
              <li>BioCity Esbjerg</li>
              <li>The Bridge Shopping</li>
              <li>Danish Fantasy</li>
              <li>Esbjerg City</li>
              <li>Esbjerg Art Museum</li>
              <li>Esbjerg Junior High School</li>
              <li>Hex - Museum of Witch Hunt</li>
              <li>The Esbjerg House</li>
              <li>Lords Assembly</li>
              <li>Ripen</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>





<!-- CONTACT FORM -->
  <div class="container mx-auto flex justify-center items-center rounded-3xl mt-32 mb-5 border-2 border-yellow-500">
      <div class="container mx-auto">
        <h1 class="flex justify-center text-2xl md:text-3xl dark:text-slate-200 mx-auto py-10">Have more questions?</h1>
        <form target="_blank" action="https://formspree.io/f/mgegplkr" method="POST" class="w-full p-8 my-4 md:px-12">
        <div class="grid grid-cols-1 gap-5 md:grid-cols-2 my-5">
          <input type="text" name="name" class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg" placeholder="Full Name" required>
          <input type="email" name="email" class="w-full bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg" placeholder="Email Address" required>
        </div>
        <div class="mb-5">
          <textarea placeholder="Your Message" class="w-full h-32 bg-gray-300 text-gray-900 mt-2 p-3 rounded-lg focus:shadow-outline" name="message" rows="10" required></textarea>
        </div>

        <div class="flex justify-end">
          <button type="submit"><SendButton /></button>
          
        </div>

        </form>
      </div>
	</div>

</template>

<script setup>
import { ref } from 'vue';
import SendButton from './Send-button.vue';




const expandedItems = ref([]);

function toggleCollapse(index) {
  const collapseId = 'collapse' + index;
  const collapseIndex = expandedItems.value.indexOf(collapseId);
  if (collapseIndex === -1) {
    expandedItems.value.push(collapseId);
  } else {
    expandedItems.value.splice(collapseIndex, 1);
  }
}

function isExpanded(index) {
  const collapseId = 'collapse' + index;
  return expandedItems.value.includes(collapseId);
}
</script>

<style scoped>

</style>
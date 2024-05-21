<template>
  
  
    <div>
  <h1 class="text-gradient text-4xl text-center pt-20">PRACTICAL INFORMATION</h1>
    </div>

    <div class="container mx-auto mt-10 py-10 bg-white rounded-3xl">
  
      <div id="accordionExample">
        <!-- Accordion Items -->
  
        <!-- First Accordion Item -->
        <div :class="[itemClasses]">
          <!-- Accordion Header -->
          <h2 class="mb-0" :id="'heading0'">
            <button
              class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
              type="button"
              @click="toggleCollapse(0)"
              :aria-expanded="isExpanded(0)"
              :aria-controls="'collapse0'">
              Where and when?
              <span
                class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
                :class="{ 'rotate-180': isExpanded(0) }">
                <svg
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
          <div class="bg-white"
            :class="{ '!visible': isExpanded(0), 'hidden': !isExpanded(0) }"
            data-twe-collapse-item
            :aria-labelledby="'heading0'"
            data-twe-parent="#accordionExample">
            <div class="px-5 py-4 text-black">
              <p>Fantasy Festival 2024 The fantasy festival is held 14-16 September 2024. <br> The fantasy festival is held at: Esbjerg Main Library (Nørregade 19,6700 Esbjerg) and around the city centre. <br> The fantasy festival is organized by Esbjerg Municipality Libraries in collaboration with various local and national associations, publishers and volunteers.</p>
            </div>
          </div>
        </div>
  
        <!-- Second Accordion Item -->
        <div :class="[itemClasses]">
          <!-- Accordion Header -->
          <h2 class="mb-0" :id="'heading1'">
            <button
              class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
              type="button"
              @click="toggleCollapse(1)"
              :aria-expanded="isExpanded(1)"
              :aria-controls="'collapse1'">
              Food and drinks
              <span
                class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
                :class="{ 'rotate-180': isExpanded(1) }">
                <svg
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
          <div class="bg-white"
            :class="{ '!visible': isExpanded(1), 'hidden': !isExpanded(1) }"
            data-twe-collapse-item
            :aria-labelledby="'heading1'"
            data-twe-parent="#accordionExample">
            <div class="px-5 py-4 text-black">
              <p>For the Fantasy Festival, it is possible to enjoy brought food on the Market Square, as well as to buy food and drink. There are several food stalls on and near the Market Square and the International Dragon House, as well as the opportunity to buy food and drink from the many cafes etc. near the festival. There are also several stalls with different food and drink specialities. At the Market Place you will find:
                <ul class="text-center font-bold">
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
  
        <!-- Third Accordion Item -->
        <div :class="[itemClasses]">
          <!-- Accordion Header -->
          <h2 class="mb-0" :id="'heading2'">
            <button
              class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-c-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
            type="button"
            @click="toggleCollapse(2)"
            :aria-expanded="isExpanded(2)"
            :aria-controls="'collapse2'">
            Overnight in Esbjerg
            <span
              class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
              :class="{ 'rotate-180': isExpanded(2) }">
              <svg
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
        <div class="bg-white"
          :class="{ '!visible': isExpanded(2), 'hidden': !isExpanded(2) }"
          data-twe-collapse-item
          :aria-labelledby="'heading2'"
          data-twe-parent="#accordionExample">
          <div class="px-5 py-4 text-black">
            <p>Would you like to take the whole Fantasy Festival with you? <a class="text-blue-500" href="https://www.lejebolig.dk/">See your options for accommodation in Esbjerg</a></p>
          </div>
        </div>
      </div>

      <!-- Other Accordion Items -->
      <!-- Add more accordion items as needed -->

    </div>

  </div>

</template>

<script setup>
import { ref, onMounted } from 'vue';
import anime from 'animejs/lib/anime.es.js';

onMounted(() => {
  anime({
  targets: '.cls-1',
  strokeDashoffset: [anime.setDashoffset, 0],
  easing: 'easeInOutSine',
  duration: 1500,
  delay: function(el, i) { return i * 250 },
  loop: false
});
});

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
.cls-1 {
  fill: none;
  stroke: #DFB647;
  stroke-width: 1.5px;
  
}
</style>
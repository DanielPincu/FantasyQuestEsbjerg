<template>
  <div>
    <hero />
    <h1 class="text-gradient text-4xl text-center pt-20">PRACTICAL INFORMATION</h1>
  </div>

  <div class="container mx-auto mt-10 py-10 bg-slate-200 rounded-3xl">

    <div id="accordionExample">
      <!-- Accordion Items -->
      <div v-for="(item, index) in accordionItems" :key="index" :class="[itemClasses]">
        <!-- Accordion Header -->
        <h2 class="mb-0" :id="'heading' + index">
          <button
            class="group relative flex w-full items-center border-0 bg-white px-5 py-4 text-left text-base text-neutral-800 transition overflow-anchor-none hover:z-[2] focus:z-[3] focus:outline-none dark:bg-body-dark dark:text-white [&:not([data-twe-collapse-collapsed])]:bg-white [&:not([data-twe-collapse-collapsed])]:text-primary [&:not([data-twe-collapse-collapsed])]:shadow-border-b dark:[&:not([data-twe-collapse-collapsed])]:bg-surface-dark dark:[&:not([data-twe-collapse-collapsed])]:text-primary dark:[&:not([data-twe-collapse-collapsed])]:shadow-white/10"
            type="button"
            @click="toggleCollapse(index)"
            :aria-expanded="isExpanded(index)"
            :aria-controls="'collapse' + index">
            {{ item.title }}
            <span
              class="-me-1 ms-auto h-5 w-5 shrink-0 transition-transform duration-200 ease-in-out group-data-[twe-collapse-collapsed]:me-0 group-data-[twe-collapse-collapsed]:rotate-0 [&>svg]:h-6 [&>svg]:w-6"
              :class="{ 'rotate-180': isExpanded(index) }">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  :d="isExpanded(index) ? 'M5.5 15.75l7.5-7.5 7.5 7.5' : 'M19.5 8.25l-7.5 7.5-7.5-7.5'" />
              </svg>
            </span>
          </button>
        </h2>
        <!-- Accordion Content -->
        <div class="bg-white"
          :id="'collapse' + index"
          :class="{ '!visible': isExpanded(index), 'hidden': !isExpanded(index) }"
          data-twe-collapse-item
          :aria-labelledby="'heading' + index"
          data-twe-parent="#accordionExample">
          <div class="px-5 py-4 text-black">
            <p>{{ item.content }}</p>
          </div>
        </div>
      </div>
    </div>

  </div>

</template>

<script setup>
import hero from '../components/Hero-section.vue'
import { ref } from 'vue';

const accordionItems = ref([
  
  { title: 'Accordion Item #1', content: 'Lorem ipsum dolor sit amet...' },
  { title: 'Accordion Item #2', content: 'Lorem ipsum dolor sit amet...' },
  { title: 'Accordion Item #3', content: 'Lorem ipsum dolor sit amet...' },
  { title: 'Accordion Item #1', content: 'Lorem ipsum dolor sit amet...' },
  { title: 'Accordion Item #2', content: 'Lorem ipsum dolor sit amet...' },
  { title: 'Accordion Item #3', content: 'Lorem ipsum dolor sit amet...' },
  
]);

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

<style>
  .accordion input[type="checkbox"] {
    position: absolute;
    opacity: 0;
  }

  .accordion label {
    display: block;
  }

  .accordion .accordion-content {
    max-height: 0;
    overflow: hidden;
    transition: max-height 0.2s ease-out;
  }

  .accordion input[type="checkbox"]:checked + label + .accordion-content {
    max-height: 1000px; /* Adjust as needed */
    transition: max-height 0.3s ease-in;
  }

  /* Add this class to rotate the icon */
  .rotate-180 {
    transform: rotate(180deg);
  }
</style>

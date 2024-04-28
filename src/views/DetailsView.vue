<template>
  <div v-if="selectedItem">
    <h1>{{ selectedItem.title }}</h1>
    <h2>{{ selectedItem.description }}</h2>

  </div>
  <div v-else>
    <p>Loading data...</p>
  </div>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute } from 'vue-router'
import connectMe from '../modules/connectMe'

const { downloadedData, fetchData } = connectMe()
const fetchDataPromise = ref(fetchData()) // Wrap fetchData in a ref
const title = ref(null); // Create a ref to store the title

// Computed property for selected item
const selectedItem = computed(() => {
  if (!downloadedData.value) return null; // Handle empty data
  return downloadedData.value.find(item => item.title === title.value);
});

onMounted(async () => {
  const route = useRoute();
  title.value = route.params.title; // Access and store title in ref

  console.log('Title:', title.value); // Log the title for debugging (optional)

  // Await fetchData to ensure data is available before processing
  await fetchDataPromise.value;
});
</script>

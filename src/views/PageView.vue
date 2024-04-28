<template>
  <main>
  
    <div v-for="item in downloadedData" :key="item" class="z-10">
      <router-link :to="`/details/${item.title}`">
        View more
      </router-link>
      <h2>{{ item.title }}</h2>
      <img class="h-96" :src="item.remoteURL" alt="item.title" />
      <p>{{ item.description }}</p>
      

      

      <div v-if="item.remoteURL">
        <a :href="item.remoteURL">Visit project</a>
      </div>
      <div v-else>

      </div>
    </div>

  
  </main>
</template>

<script setup>

import { onMounted } from 'vue'

import connectMe from '../modules/connectMe'
const { downloadedData,  fetchData } = connectMe()


onMounted(() => {
  fetchData()
})







</script>


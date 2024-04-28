<template>
  <main>
  
    <div v-for="item in downloadedData" :key="item" class="card">
      <router-link :to="`/details/${item.title}`">
        View more
      </router-link>
      <h2>{{ item.title }}</h2>
      <p>{{ item.description }}</p>
      <p>{{ item.id }}</p>
      

      <img :src="item.remoteURL" alt="">
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


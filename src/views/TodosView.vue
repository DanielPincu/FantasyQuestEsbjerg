<template>

    <div v-for="item in downloadedData" :key="item">
      <p>{{ item.title }}</p>
      <p>{{ item.description }}</p>
      <img :src="item.remoteURL" alt="">
    </div>
  
</template>

<script setup>

import { onMounted } from 'vue'

import connectMe from '../modules/connectMe'
const { downloadedData,  fetchData } = connectMe()

onMounted(() => {
  fetchData()
})





</script>





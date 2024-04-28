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

<style lang="scss">
.card {
  color:#333;
  background-color: #f4f4f4;
  padding: 1rem;
  margin: 1rem;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.web {
  background-color: #af7012;
}
.photo {
  background-color: #f256e2;
}
</style>
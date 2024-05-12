
<template>
  <div>
    <hero />
    <h1 class="text-gradient text-4xl text-center pt-20">PRACTICAL INFORMATION</h1>
  </div>

  


  
</template>

<script setup>
import hero from '../components/Hero-section.vue'

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
</style>

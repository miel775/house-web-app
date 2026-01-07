<script setup>
import { ref, onMounted } from 'vue'

const houses = ref(null)
const error = ref(null)
const loading = ref(false)

onMounted(async () => {
  loading.value = true;
  
  try {
    const response = await fetch(
      'https://api.intern.d-tt.nl/api/houses',
      {
        headers: {
          'X-Api-Key': 'nvmE37kpr-xfUcAejPoM6_hC2Xbui5WO'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    houses.value = await response.json();
    console.log(houses.value); 
    
  } catch (err) {
    error.value = err.message;
    console.error('Error fetching houses:', err);
  } finally {
    loading.value = false; 
  }
})
</script>

<template>
  <main>
    <p v-if="loading">Loading houses…</p>
    <p v-else-if="error">Error: {{ error }}</p>

    <ul v-else-if="houses">
      <li v-for="house in houses" :key="house.id">

        <img :src="house.image" alt="House image" width="250px">

        <h2> {{ house.location.street }} {{ house.location.houseNumber }} </h2>

        <p> €{{ house.price.toLocaleString() }} </p> 

        <p> {{ house.location.zip }}</p>

        <img src="./assets/icons/bed.svg">
                <p> {{ house.rooms.bed }}</p>
        <img src="./assets/icons/bath.svg">
                <p> {{ house.rooms.bath }}</p>
        <img src="./assets/icons/size.svg">

        
      </li>
    </ul>
  </main>
</template>

<style>

</style>
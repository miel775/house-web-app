<script setup>
import { ref, onMounted } from 'vue'

const houses = ref([])
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
        <div class="banner-home">
        <li v-for="house in houses" :key="house.id">
        <img :src="house.image" alt="House image">
      </li>
            
        </div>
        <h1>Home</h1>
        <p>Welcome on the house page</p>

        <div class="recommended-houses">
        </div>
    </main>
</template>

<style>
    .background {
        position: absolute;
        z-index: -1;
        height: 100vh;
        width: 100vw;
        left: 0;
        top: 0;
    }
</style>

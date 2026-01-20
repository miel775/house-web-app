<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const houses = ref([])
const error = ref(null)
const loading = ref(false)

onMounted(async () => {
  loading.value = true;
  
  try {
    const response = await fetch(
      'https://api.intern.d-tt.nl/api/houses/:id'
,
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
   <router-link
  class="house-listing-button"
  :to="`/houses/`"
>
  <img src="/src/assets/icons/back.svg" width="48">
</router-link>  

   <div class="recommended-houses">

   </div>


  </main>
</template>
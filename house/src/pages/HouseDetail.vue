<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// useRoute to get the slug of a house
const route = useRoute()
const houseId = route.params.id

// houses to houe
const house = ref([])
const error = ref(null)
const loading = ref(false)

onMounted(async () => {
  loading.value = true;
  
  try {
    const response = await fetch(
      `https://api.intern.d-tt.nl/api/houses/${houseId}`,
      {
        headers: {
          'X-Api-Key': 'nvmE37kpr-xfUcAejPoM6_hC2Xbui5WO'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
    house.value = await response.json();    
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
  <div v-if="loading">Loading...</div>
    <div v-else-if="house">
      <img :src="house.image" width="400" />
      <h1>{{ house.street }}</h1>

      <p>€ {{ house.price }}</p>
      <p>{{ house.zip }}</p>

      <p>
        {{ house.rooms.bedrooms }} beds ·
        {{ house.rooms.bathrooms }} baths ·
        {{ house.size }} m²
      </p>
    </div>

   <div class="recommended-houses">

   </div>


  </main>
</template>
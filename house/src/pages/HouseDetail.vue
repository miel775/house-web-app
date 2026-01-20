<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// useRoute to get the slug of a house
const route = useRoute()
const houseId = route.params.id

// houses to houe
const house = ref(null)
const error = ref(null)
const loading = ref(false)

// value of house


onMounted(async () => {
  try {
    loading.value = true

    if (!route.params.id) {
      throw new Error('House ID is missing')
    }
    const response = await fetch(
      `https://api.intern.d-tt.nl/api/houses/${route.params.id}`,
      {
        headers: {
          'X-Api-Key': 'nvmE37kpr-xfUcAejPoM6_hC2Xbui5WO'
        }
      }
    )
    
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    
const data = await response.json()
house.value = data[0]
    
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

    <p>
      {{ house }}
    </p>

   <div class="recommended-houses">

   </div>


  </main>
</template>
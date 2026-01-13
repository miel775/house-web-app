<script setup>
import { ref, onMounted } from 'vue'
import NavigationBar from './components/navigation-bar.vue'
import HouseListing from './components/House-listing.vue'

const houses = ref([])
const error = ref(null)
const loading = ref(false)
const query = ref('')

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
    <NavigationBar />
    <p v-if="loading">Loading houses…</p>
    <p v-else-if="error">Error: {{ error }}</p>

    <ul v-else class="house-listings">
      <li v-for="house in houses" :key="house.id">
        <HouseListing 
            :image="house.image"
            :streetname="`${house.location.street} ${house.location.houseNumber}`"
            :price="house.price"
            :zip="`${house.location.zip} ${house.location.city}`"
            :bedAmount="house.rooms.bedrooms"
            :bathAmount="house.rooms.bathrooms"
            :size="house.size"></HouseListing>
      </li>
    </ul>
  </main>
</template>

<style>
  li {
    list-style: none;
    margin-left: -3%;
    padding: 0;


  }

  .house-listings {
    display: flex;
    flex-direction: column;
    gap: 1em;
  }
</style>
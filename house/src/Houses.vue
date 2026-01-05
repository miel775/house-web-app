<script setup>
import { ref, onMounted } from 'vue'

const house = ref(null)
const loading = ref(true)
const error = ref(null)

onMounted(async () => {
  try {
    const response = await fetch(
      'https://api.intern.d-tt.nl/api/houses/2',
      {
        method: 'GET',
        headers: {
          'X-Api-Key': '849-2_z6YJHb7KyxFhdlfsuQE5BDaqcr'
        }
      }
    )

    if (!response.ok) {
      throw new Error('Failed to fetch data')
    }

    house.value = await response.json()
  } catch (err) {
    error.value = err.message
  } finally {
    loading.value = false
  }
})
</script>

<template>
  <main>
    <div v-if="loading">Loading data…</div>
    <div v-else-if="error">Error: {{ error }}</div>

    <div v-else>
      <h2>{{ house.location.city }}</h2>
      <p>Price: €{{ house.price }}</p>
      <p>Bedrooms: {{ house.rooms.bedrooms }}</p>
    </div>
  </main>
</template>

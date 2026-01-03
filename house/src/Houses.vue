<script setup>
import { ref, onMounted } from 'vue'

const house = ref(null)

onMounted(async () => {
  try {
    const response = await fetch('https://api.intern.d-tt.nl/api/houses/2', {
      method: 'GET',
      headers: {
        'X-Api-Key': '{849-2_z6YJHb7KyxFhdlfsuQE5BDaqcr}'
      }
    })
}
    house.value = await response.json()
})
</script>

<template>
  <h1>Houses</h1>
  <p>This is a page about houses</p>
</template>

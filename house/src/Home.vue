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
<div class="banner-home" v-if="houses.length">
  <img :src="houses[1].image" alt="House image">
</div>
        <h1>Home</h1>
        <p>Welcome on the house page on this page you can navigate through different houses. Navigate to the house button to explore the houses.</p>

        <h2> Recommended houses</h2>
        <div class="recommended-houses">
            <article>
                <div v-for="house in houses.slice(0, 4)" :key="house.id">
                    <a>
                        <img :src="house.image" alt="House of {{ house.location.street }} {{ house.location.houseNumber }} ">
                        <div class="street-name-hover"> 
                            <p> {{ house.location.street }} {{ house.location.houseNumber }} </p>
                        </div>
                    </a>
                </div>
            </article>
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

    .banner-home {
    height: 25vh;
    overflow: hidden;
    margin-left: -100px;

    img {
        width: 110vw;
        top: -100px;
        position: relative;
    }

    @media (max-width: 720px) {
      height: 40vh;

      img {
      width: 200vw;
      }
  }
}

.recommended-houses {
  height: 30vh;
  width: 100vw;
  position: absolute;
  overflow-y: scroll;
  background-color: var(--primary-color-light);
  padding: 2em;
}

.recommended-houses article {
    display: flex;
    gap: 1em;
    aspect-ratio: 1/1;

    img {
      overflow: hidden;
      width: 256px;
      height: 256px;
    }

    img ~ .street-name-hover {
      display: absolute;
      top: 0;
      left: 0;
      z-index: 2;
        background-color: var(--primary-color);
  border: var(--border-white)
    }
}

.street-name-hover {
  display: none;

}
</style>

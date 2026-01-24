<script setup>
import { ref, onMounted } from 'vue'
const error = ref(null)
const loading = ref(false)

const houses = [
  {
    name: 'Theolasingstraat 16 Amsterdam',
    image: 'https://verbouw-gigant.nl/wp-content/uploads/2018/02/Kosten-huis-laten-bouwen-1024x576.jpg',
    zip: 'NO90ND',
    price: 140000,
    bedrooms: 3,
    bathrooms: 2,
    size: 60
  },
  {
    name: 'Another House',
    image: 'https://www.groothuisbouw.nl/thumbs/764×999×80×n/vraag-antwoord/2022/04/1.jpg',
    zip: 'AB12CD',
    price: 200000,
    bedrooms: 4,
    bathrooms: 3,
    size: 120
  }
]

</script>

<template>
    <main>

        <div class="house-container">
    <div v-for="house in houses" :key="house.name" class="house-listing">
      <img :src="house.image" :alt="house.name" class="house-listing-image" width="250px">
      <h2>{{ house.name }}</h2>
      <p>{{ house.zip }}</p>
      <p>€{{ house.price }}</p>
      <p>{{ house.bedrooms }} Bedrooms, {{ house.bathrooms }} Bathrooms, {{ house.size }} m²</p>
    </div>
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

    img:hover ~ .street-name-hover {
      display: block;
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

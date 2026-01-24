<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

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
    image: 'https://via.placeholder.com/250',
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

   <div class="recommended-houses">

   </div>


  </main>
</template>

<style>
.house-container {
  container-type: inline-size;
  container-name: house-listing;
}

.house-listing {
    background-color: var(--neutral-color);
    padding: 1em;
    display: grid;
    grid-template-columns: 1fr 70%;

    .house-listing-image {
        width: max(250px, 100%);
        object-fit: cover;
    }
}

.house-listing-details-2 {
    display: flex;
    gap: 2em;
}

.house-listing-details {
    display: flex;
    gap: 2em;
}

.house-listing h2 {
  font-size: 1em;
}

@container house-listing (width < 720px) {
  .house-listing h2 {
    font-size: 2em;
  }

  .house-listing {
    display: grid;
    margin-right: 4%;
    grid-template-columns: 1fr;
  }
}

.house-listing-grid-one {
  height: 100%;
}

.house-listing-details {
  display: grid;
  grid-template-rows: 40% 20% 10%;
  margin: 1em;
}

.house-lising-details-1 div {
  display: flex;
  align-items: center;
}

.house-listing-details-2 div {
  display: flex;
  gap: 0.5em;
}

.house-listing-button {
  width: 8em;
  height: 2em;
  background-color: var(--primary-color-lighter);
}

.house-listing-button-area {
  display: flex;
  justify-content: flex-end;
}
</style>
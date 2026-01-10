<script setup>
import { ref, computed } from 'vue';
const props = defineProps({
  image: String,
  streetname: String,
  price: [Number, String],
  zip: [Number, String],
  bedAmount: [Number, String],
  bathAmount: [Number, String],
  size: [Number, String]
})
</script>

<template>
  <div class="house-container">
    <div class="house-listing">
      <div class="house-listing-grid-one">
        <img class="house-listing-image" :src="props.image" alt="`House at ${props.streetname}`" width="250px">
        <h2> {{ props.streetname }} </h2>
      </div>
      <div class="house-listing-details">
        <div class="house-lising-details-1">
         <img class="icon" src="../assets/icons/location.svg">
          <p> {{ props.zip }}</p>

          <img class="icon" src="../assets/icons/worth.svg">
          <p> €{{ props.price }}</p>
          </div>

          <div class="house-listing-details-2">
            <img class="icon" src="../assets/icons/bed.svg">
            <p>{{ props.bedAmount }}</p>
            <img class="icon" src="../assets/icons/bath.svg">
            <p>{{ props.bathAmount }}</p>
            <img class="icon" src="../assets/icons/size.svg">
            <p> {{ props.size }} m² </p>
          </div>
        </div>
    </div>
  </div>
</template>

<style scoped>
.house-container {
  container-type: inline-size;
  container-name: house-listing;
}

.house-listing {
    background-color: var(--primary-color-light);
    width: 80vw;
    padding: 2em;
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
    grid-template-columns: 1fr;
  }
}

</style>
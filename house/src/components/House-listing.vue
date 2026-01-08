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
    <div class="house-listing">
        <img :src="props.image" alt="`House at ${props.streetname}`" width="250px">

        <h2>  </h2>
        <h2> {{ props.streetname }} </h2>

        <div class="house-listing-details">
          <p> €{{ props.price }}</p>

          <p> {{ props.zip }}</p>
          <img src="./assets/icons/bed.svg">
          <p>{{ props.bedAmount }}</p>
          <img src="./assets/icons/bath.svg">
          <p>{{ props.bathAmount }}</p>
          <img src="./assets/icons/size.svg">
          <p> {{ props.size }} </p>
        </div>
    </div>
</template>

<style scoped>
.house-listing {
    background-color: var(--primary-color);
    width: 80vw;
    padding: 2em;

    img {
        width: max(250px, 100%);
        object-fit: cover;
    }
}

</style>
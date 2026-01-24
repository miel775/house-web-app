<script setup>
import { useRoute } from 'vue-router'

// const props = defineProps({
//   id: [String, Number],
//   image: String,
//   streetname: String,
//   price: [Number, String],
//   zip: [Number, String],
//   bedAmount: [Number, String],
//   bathAmount: [Number, String],
//   size: [Number, String]
// })

const route = useRoute()
const houseId = route.params.id
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
          <div class="house-lising-zip">
            <img class="icon" src="../assets/icons/location.svg">
            <p> {{ props.zip }}</p>
          </div>
          <div class="house-lising-price">
            <img class="icon" src="../assets/icons/worth.svg">
            <p> €{{ props.price }}</p>
          </div>
        </div>

          <div class="house-listing-details-2">
            <img class="icon" src="../assets/icons/bed.svg">
            <p>{{ props.bedAmount }}</p>
            <img class="icon" src="../assets/icons/bath.svg">
            <p>{{ props.bathAmount }}</p>
            <img class="icon" src="../assets/icons/size.svg">
            <p> {{ props.size }} m² </p>
          </div>
          <div class="house-listing-button-area">
<router-link
  class="house-listing-button"
  :to="`/houses/${props.id}`"
>
  Bekijk
</router-link>            </div>
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
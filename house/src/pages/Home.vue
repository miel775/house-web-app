<script setup>
import { ref, onMounted } from 'vue'
const error = ref(null)
const loading = ref(false)

const houses = [
  {
    image: 'https://verbouw-gigant.nl/wp-content/uploads/2018/02/Kosten-huis-laten-bouwen-1024x576.jpg',
    zip: 'NO90ND',
    price: 140000,
    bedrooms: 3,
    bathrooms: 2,
    size: 60,
    streetname: "Theolasingstraat",
    housenumber: "16",
    city: "Amsterdam",
  },
  {
    image: 'https://www.groothuisbouw.nl/thumbs/764×999×80×n/vraag-antwoord/2022/04/1.jpg',
    zip: 'AB12CD',
    price: 200000,
    bedrooms: 4,
    bathrooms: 3,
    size: 120,
    streetname: "Julianastraat",
    housenumber: "18",
    city: "Utrecht"
  }
]

</script>

<template>
    <main>

        <div class="house-container">
    <div  v-for="house in houses" class="house-listing">
      <div class="house-listing-grid-one">
        <img class="house-listing-image" :src="house.image" :alt="house.city" width="250">
        <h2> {{ house.streetname }} {{ house.housenumber }} </h2>
      </div>

      <div class="house-listing-details">
        <div class="house-lising-details-1">
          <div class="house-lising-zip">
            <img class="icon" src="../assets/icons/location.svg" alt="location icon">
            <p> {{ house.zip }} {{ house.city }}</p>
          </div>
          <div class="house-lising-price">
            <img class="icon" src="../assets/icons/worth.svg" alt="money icon">
            <p> €{{ house.price }}</p>
          </div>
        </div>

          <div class="house-listing-details-2">
            <img class="icon" src="../assets/icons/bed.svg" alt="bed icon">
            <p>{{ house.bedrooms }}</p>
            <img class="icon" src="../assets/icons/bath.svg" alt="bath icon">
            <p>{{ house.bathrooms }}</p>
            <img class="icon" src="../assets/icons/size.svg" alt="size icon">
            <p> {{ house.size }} m² </p>
          </div>
          <div class="house-listing-button-area">
<a>
  Bekijk
</a>
 </div>

        </div>

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

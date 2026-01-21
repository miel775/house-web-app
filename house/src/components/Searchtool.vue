<script setup>
import { ref, onMounted } from 'vue'

onMounted(async () => {

let houses = []

// seleecteer de zoekbalk
const searchInput = document.querySelector("[data-search]")

// wanneer je iets invult in de zoekbalk 
searchInput.addEventListener("input", (e) => {
    const value = e.target.value
    console.log(value)
})
})
</script>


<template>
        <form class="navigation-bar-search-bar">
                <label for="search">Zoek naar huizen</label>
                <input type="search" placeholder="Zoek naar huizen" data-search>
        </form>
</template>
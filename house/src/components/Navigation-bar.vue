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
    <div class="navigation-bar">
        <div class="navigation-bar-one">
        <a href="/">
            <img  class="icon" src="../assets/icons/back.svg">
        </a>

        <div class="navigation-bar-input-fields">
            <form class="navigation-bar-search-bar">
                <label for="search">Zoek naar huizen</label>
                <input type="search" placeholder="Zoek naar huizen" data-search>
            </form>

            <button class="navigation-bar-card">
                <p> Sort by</p>
            </button>
        </div>
        </div>

        <div class="navigation-bar-two">
            <a href="/add">
                <img class="icon" src="../assets/icons/add.svg">    
            </a>
        </div>
    </div>

    <div class="navigation-bar-bottom">
        <a href="/home">
            <img  class="icon" src="../assets/icons/back.svg">
        </a>

        <a href="/add">
            <img class="icon" src="../assets/icons/add.svg">
        </a>
    </div>
</template>

<style scoped>

.navigation-bar {
    display: flex;
    padding: 1em;
    height: 8vh;
    background-color: var(--primary-color-lightest);
    justify-content: space-between;
    align-items: center;
    margin-left: -4em;
    margin-right: -4em;
    margin-top: -3em;
}

.navigation-bar-one {
    display: flex;
    align-items: center;
    gap: 1em;
    justify-content: flex-start;
}

.navigation-bar-two {
    height: 2em;
    width: 2em;
}

.navigation-bar-card {
    height: 2em;
    width: 10em;
}

.navigation-bar-input-fields {
    display: flex;
    height: 1em;
    gap: 1em;
    align-items: center;
}

.navigation-bar-search-bar {
    width: 30vw;

    input {
        width: 30vw;
        height: 2em;
    }
}

/* navigation-bar-bottom */
.navigation-bar-bottom {
    background-color: var(--primary-color-lightest);
    display: flex;
    justify-content: space-around;
    padding: 1em;
    position: fixed;
    bottom: 0;
    z-index: 2;
    width: 100vw;
    margin-left: -4em;

    a {
        background-color: var(--primary-color-lighter);
        height: 2em;
        width: 2em;
        padding: 0.5em;
    }

        @media (min-width: 720px) {
        display: none;
    }
}
</style>
<script setup>
import { ref, computed } from 'vue'
import LogoDTT from './icons/logoDTT.vue'

// check on which path you are otherwise show the homepage
const currentPath = ref(window.location.hash || '#/')

window.addEventListener('hashchange', () => {
    currentPath.value = window.location.hash
})

// check if houses is active
const isHousesActive = computed(() =>
  currentPath.value.startsWith('#/houses')
)
// check if about is active
const isAboutActive = computed(() =>
  currentPath.value.startsWith('#/about')
)

const isHomeActive = computed(() =>
  currentPath.value === ('#/')
)

function toggleDropdown() {
    document.querySelector(".dropdown").classList.toggle("open");
}

</script>

<template>
    <header>
        <div class="navigation-bar">
      <a href="#/" :class="{ active: isHomeActive }">Home</a>
      <a href="#/houses" :class="{ active: isHousesActive }">Houses</a>
      <a href="#/about" :class="{ active: isAboutActive }">About</a>
        </div>

        <div class="logo-icon">
            <LogoDTT />
        </div>

        <button class="dropdownbutton" @click="toggleDropdown">
            <LogoDTT />
        </button>
    </header>

    <div class="dropdown">
      <a href="#/" :class="{ active: isHomeActive }">Home</a>
      <a href="#/houses" :class="{ active: isHousesActive }">Houses</a>
      <a href="#/about" :class="{ active: isAboutActive }">About</a>
    </div>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100px;
    background-color: var(--primary-color);
    display: flex;
    justify-content: space-between;
    border: black solid 1px;
    align-items: center;
    z-index: 2;

    @media (max-width: 720px) {
        justify-content: center;
    }
}

.navigation-bar {
    margin-left: 2em;
    display: flex;
    gap: 1em;
    align-items: center;

    @media (max-width: 720px) {
        display: none;
    }
}

a {
    color: black;
    width: fit-content;
    background-color: var(--primary-color-dark);
    padding: 1em;
    border: black solid 2px;
    font-family: 'Monsterrat Bold';
    text-decoration: none;
}

/* removing style button */
button,
input[type="submit"],
input[type="reset"] {
    background: none;
    color: inherit;
    border: none;
    padding: 0;
    font: inherit;
    cursor: pointer;
    outline: inherit;
}

.dropdown {
    display: none;

    a {
        width: 100vw;
    }
}

.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
}

.logo-icon {
    margin-right: 1em;

    @media (max-width: 720px) {
        display: none;
    }
}

.dropdownbutton {
    @media (min-width: 720px) {
        display: none;
    }
}

.active {
    background-color: var(--primary-color-light);;
}


</style>
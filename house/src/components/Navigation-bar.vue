<script setup>
import { ref, computed } from 'vue'
</script>

<template>
    <div></div>

    <div class="header-block">

    </div>

    <div class="dropdown-sort">
      <button> Cheapest </button>
      <button> Price ascending</button>
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

.header-block {
    height: 10vh;
}


</style>
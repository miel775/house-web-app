<script setup>
import { ref, computed } from 'vue'
</script>

<template>
    <div class="navigation-bar">
        <button>
            <img  class="icon" src="../assets/icons/back.svg">
        </button>

        <div class="navigation-bar-input-fields">
            <form>
                <input type="textfield" length="10" placeholder="search for houses">
            </form>

            <div class="card">
                <p> Sort by</p>
            </div>

            <button>
                <img class="icon" src="../assets/icons/add.svg">
            </button>
        </div>
    </div>
</template>

<style scoped>

.navigation-bar {
    margin-left: 2em;
    display: flex;
    gap: 1em;
    padding: 1em;
    height: 18vh;
    margin-left: -3vw;
    background-color: var(--primary-color-light);
    align-items: center;

    @media (max-width: 720px) {
        display: none;
    }
}

.avigation-bar-card {
    height: 1em;
    width: fit-content;
    background-color: var(--);
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
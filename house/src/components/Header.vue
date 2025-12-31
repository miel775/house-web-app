<script setup>
import LogoDTT from './icons/logoDTT.vue'

function open(){
  document.querySelector("dropdown").classList.toggle("open");
}

</script>

<template>
    <header>
        <div class="navigation-bar">
            <a href="#/houses">Houses</a>
            <a href="#/about">About</a>
        </div>

        <button onclick="open()">
            <LogoDTT />
        </button>
    </header>

    <div class="dropdown">
        <a href="#/houses">Houses</a>
        <a href="#/about">About</a>
    </div>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100px;
    background-color: #FF9B21;
    display: flex;
    justify-content: space-between;
    border: black solid 1px;
    align-items: center;

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
    background-color: #FFD6A4;
    padding: 1em;
    border: black solid 1px;
}

/* removing style button */
button, input[type="submit"], input[type="reset"] {
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

.dropdown.open {
    display: flex;
    flex-direction: column;
    position: absolute;
    top: 100px;
    left: 0;
}

</style>
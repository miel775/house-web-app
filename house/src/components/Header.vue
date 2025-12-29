<script setup>
import LogoDTT from './icons/logoDTT.vue'
</script>

<template>
    <header>
        <div class="navigation-bar">
            <a href="/houses">Houses</a>
            <a href="/about">About</a>
        </div>

        <LogoDTT />
    </header>
</template>

<style scoped>
header {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 10vh;
    background-color: orange;
    display: flex;
    justify-content: space-between;
}

</style>
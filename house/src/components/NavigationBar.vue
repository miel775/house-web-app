<script setup>
    import Searchtool from './Searchtool.vue';
    import SortBy from './SortBy.vue';

</script>

<template>
    <div class="navigation-bar">
        <div class="navigation-bar-one">
        <a href="/">
            <img  class="icon" src="../assets/icons/back.svg">
        </a>
        </div>

        <div class="navigation-bar-input-fields">
            <Searchtool />
        </div>

        <div>
            <SortBy />
        </div>

        <div class="navigation-bar-two">
            <p>Create new</p>
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
    width: 100%;
    height: 4em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 1em;
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
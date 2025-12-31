<script setup>
import { ref, computed } from 'vue'

import Header from './components/Header.vue'

import Home from './Home.vue'
import Houses from './houses.vue'
import About from './about.vue'
import NotFound from './NotFound.vue'

// routing of the housing app
const routes = {
  '/': Home,
  '/about': About,
  '/houses': Houses
}

const currentPath = ref(window.location.hash)

window.addEventListener('hashchange', () => {
  currentPath.value = window.location.hash
})

const currentView = computed(() => {
  return routes[currentPath.value.slice(1) || '#/'] || NotFound
})



</script>

<template>
  <Header></Header>

    <div class="dropdown" on:click="">
        <a href="#/houses">Houses</a>
        <a href="#/about">About</a>
    </div>
  <main>
  </main>
    <component :is="currentView" />
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }
}
</style>

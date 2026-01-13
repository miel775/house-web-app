<script setup>
import {createRouter, createWebHistory } from 'vue-router/auto'

import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
import Houses from '@/pages/Houses.vue'
import NotFound from '@/pages/NotFound.vue'

// components
import Header from './components/Header.vue'

// routing of the housing app
const routes = {
  '/': Home,
  '/about': About,
  '/houses': Houses,
  '/houses/:id': House Detailpage
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
    <component :is="currentView" />
</template>

<style scoped>
main {
  margin-left: 0;

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

<script setup>
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/pages/Home.vue'
import Houses from '@/pages/Houses.vue'
import About from '@/pages/About.vue'
import NotFound from '@/pages/NotFound.vue'
import HouseDetail from '@/pages/HouseDetail.vue'

// components
import Header from './components/Header.vue'

// routing of the housing app
export const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    { path: '/houses', name: 'Houses', component: Houses },
    { path: '/houses/:id', name: 'HouseDetail', component: HouseDetail, props: true },
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
  ],
})

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
  <router-view />
</template>

<style scoped>

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

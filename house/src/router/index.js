import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '../pages/Home.vue'
import Houses from '../pages/Houses.vue'
import About from '../pages/About.vue'
import NotFound from '../pages/NotFound.vue'
import HouseDetail from '../pages/HouseDetail.vue'

const routes = [
  { path: '/', name: 'Home', component: Home },
  { path: '/about', name: 'About', component: About },
  { path: '/houses', name: 'Houses', component: Houses },
  { path: '/houses/:id', name: 'HouseDetail', component: HouseDetail, props: true },
  { path: '/:pathMatch(.*)*', name: 'NotFound', component: NotFound },
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
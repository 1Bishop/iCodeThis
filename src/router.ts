import { createRouter } from 'vue-router';
import { createWebHistory } from 'vue-router';

import HomePage from './components/HomePage.vue'

export const routes = [
  {
    path: '/',
    name: 'home-page',
    component: HomePage,
  },
  // For lazy loading components
  /* {
    path: '/',
    name: 'home-page',
    component: () => import('@/pages/HomePage.vue'),
  }, */
]

export const router = createRouter({
  history: createWebHistory(),
  routes,
})
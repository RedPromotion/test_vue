import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: () => import('./pages/HomePage.vue'),
  },
  {
    path: '/counter',
    name: 'Counter',
    component: () => import('./pages/CounterPage.vue'),
  },
  {
    path: '/vuetify',
    name: 'Vuetify',
    component: () => import('./pages/VuetifyPage.vue'),
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('./pages/AboutPage.vue'),
  },
  {
    path: '/input-table',
    name: 'InputTable',
    component: () => import('./pages/InputTablePage.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

export default router 
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  { 
    path: '/',
    name: 'home',
    component: () => import('@/views/Home.vue'),
    meta: { requiresAuth: true }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login.vue'),
    meta: { guest: true }
  },
  {
    path: '/signup',
    name: 'Register',
    component: () => import('@/views/Register.vue'),
    meta: { guest: true }
  },
]

export default createRouter({
  history: createWebHistory(),
  strict: true,
  routes
})

import { createRouter, createWebHistory } from 'vue-router'


const routes = [
  { path: '/', name: 'Home', component: () => import('./views/Home.vue') },
  { path: '/form', name: 'Form', component: () => import('./views/Form.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})


export default router;
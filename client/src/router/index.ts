import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/:pathMatch(.*)*', name: 'NotFound', component: () => import('../views/NotFoundView.vue')},
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/profil',
      name: 'profil',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/projets',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      path: '/contact',
      name: 'contact',
      component: () => import('../views/ContactView.vue'),
    },
  ],
})

export default router

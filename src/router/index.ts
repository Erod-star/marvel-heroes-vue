import { createRouter, createWebHistory } from 'vue-router'
import LoginView from '@/login/views/LoginView.vue'
import MainLayout from '@/layouts/MainLayout.vue'
import NotFoundedView from '@/shared/views/NotFoundedView.vue'
import HomeView from '@/shared/views/HomeView.vue'
import { heroesRoute } from '@/heroes/router'
import { profileRoute } from '@/profile/router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/login',
      name: 'login',
      component: LoginView
    },
    {
      path: '/',
      name: 'MainLayout',
      component: MainLayout,
      redirect: 'home',
      children: [
        {
          path: '/',
          name: 'home',
          component: HomeView
        },
        {
          ...heroesRoute,
          path: '/heroes'
        },
        {
          ...profileRoute,
          path: '/profile'
        }
      ]
    },
    { path: '/:pathMatch(.*)*', component: NotFoundedView }
  ]
})

export default router

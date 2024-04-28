import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
      meta: {
        title: "Home"
      }
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
      meta: {
        title: "About"
      }
    },
    {
      path: '/page',
      name: 'page',
      component: () => import('../views/PageView.vue'),
      meta: {
        title: "Page View"
      }
    },
    {
      path: '/details/:title',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
      props: true,

    },
  ]
})


export default router

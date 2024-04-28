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
        title: "Page"
      }
    },
    {
      path: '/details/:title',
      name: 'details',
      component: () => import('../views/DetailsView.vue'),
      meta: {
        dynamicTitle: true 
      }

    },
    
  ]

  
})

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title || (to.meta.dynamicTitle && to.params.title); 
  document.title = `Daniel Pincu | ${pageTitle}`;
  next()
})



export default router

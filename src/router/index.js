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
      path: '/family-quest',
      name: 'Family Quest',
      component: () => import('../views/FamilyView.vue'),
      meta: {
        title: "Family Quest"
      }
    },

    {
      path: '/night-quest',
      name: 'Night Quest',
      component: () => import('../views/NightView.vue'),
      meta: {
        title: "Night Quest"
      }
    },

    {
      path: '/faq',
      name: 'FAQ',
      component: () => import('../views/FAQView.vue'),
      meta: {
        title: "FAQ"
      }
    },



    // {
    //   path: '/page',
    //   name: 'page',
    //   component: () => import('../views/PageView.vue'),
    //   meta: {
    //     title: "Page"
    //   }
    // },
    // {
    //   path: '/details/:title',
    //   name: 'details',
    //   component: () => import('../views/DetailsView.vue'),
    //   meta: {
    //     dynamicTitle: true 
    //   }

    // },
    
  ]

  
})

router.beforeEach((to, from, next) => {
  const pageTitle = to.meta.title || (to.meta.dynamicTitle && to.params.title); 
  document.title = `Fantasy Quest | ${pageTitle}`;
  next()
})



export default router

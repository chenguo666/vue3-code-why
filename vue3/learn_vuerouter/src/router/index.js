import {
  createRouter,
  createWebHistory,
  createWebHashHistory
} from 'vue-router'
// import Home from '../pages/Home.vue'
// import About from '../pages/About.vue'

const routes = [{
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    component: () => {
      return import ( /* webpackChunkName:"home" */ '../pages/Home.vue')
    },
    meta: {
      name: 'why',
      age: '18'
    },
    children: [{
        path: '',
        redirect: '/home/list'
      },
      {
        path: 'list',
        component: () =>
          import ('../pages/list.vue')
      },
      {
        path: 'show',
        component: () =>
          import ('../pages/show.vue')
      }
    ]
  },
  {
    path: '/about',
    component: () => {
      return import ( /* webpackChunkName:"about" */ '../pages/About.vue')
    }
  },
  {
    path: '/user/:id',
    component: () => {
      return import ( /* webpackChunkName:"about" */ '../pages/user.vue')
    }
  },
  {
    path: '/:pathMath(.*)*',
    component: () => {
      return import ( /* webpackChunkName:"about" */ '../pages/404.vue')
    }
  }
]

const router = createRouter({
  routes,
  history: createWebHashHistory()
})

export default router
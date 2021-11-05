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
    name: 'home',
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
  // 动态添加路由
const category = {
    path: '/category',
    component: () =>
      import ('../pages/category.vue')
  }
  // 添加顶级路由
router.addRoute(category)
  // 添加二级路由对象 home 是name路由名称
router.addRoute('home', {
    path: 'second',
    component: () =>
      import ('../pages/Homesecond.vue')
  })
  // 删除路由 三种方式
  // 1. 添加相同的路由
  // 2. removeRoute 传入路由名称
  // 3. 通过addRoute方法的返回值回调 如果路由存在的话
export default router
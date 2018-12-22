import MSite from '../pages/MSite/MSite.vue'
import Order from '../pages/Order/Order.vue'
import Profile from '../pages/Profile/Profile.vue'
import Serach from '../pages/Serach/Serach.vue'
import Login from '../pages/Login/Login.vue'

export default [
  {
    path:'/msite',
    component: MSite,
    meta:{
      showFooter: true
    }
  },
  {
    path:'/order',
    component:Order,
    meta:{
      showFooter: true
    }
  },
  {
    path:'/profile',
    component:Profile,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/search',
    component: Serach,
    meta:{
      showFooter: true
    }
  },
  {
    path: '/login',
    component: Login
  },
  //根路由
  {
    path: '/',
    component: MSite
  }


]

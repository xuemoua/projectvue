import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import News from '@/components/News'
import About from '../views/About'
import Manual from '@/components/Manual'
import Notice from '@/components/Notice'
import Contact from '@/components/Contact'
import Signin from '@/components/User/Signin'
import Signup from '@/components/User/Signup'


Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'ໜ້າຫຼັກ',
    component: Home
  },
  {
    path: '/news',
    name: 'ຂ່າວສານ',
    component: News
  },
  {
    path: '/about',
    name: 'ອົງກອນ',
    component: About
  },
  {
    path: '/notice',
    name: 'ແຈ້ງການ',
   
    component: Notice
  },
  {
    path: '/manual',
    name: 'ຄູ່ມື',
   
    component: Manual
  },

  {
    path: '/contact',
    name: 'ຕິດຕໍ່',
   
    component: Contact
  },
  {
    path: '/signin',
    name: 'ເຂົ້າສູ່ລະບົບ',
   
    component: Signin
  },
  {
    path: '/signup',
    name: 'ສະ?ັກສະມາຊິກ',
   
    component: Signup
  },
 
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

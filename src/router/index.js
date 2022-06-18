import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/signup.vue'
// import profile from '../views/profile.vue'
// import login1 from '../views/loginpage.vue'
// import createNFT from '../views/createNFT.vue'
// import saleItemInfoPage from '../views/saleItemInfoPage.vue'
// import newstartTradepage from '../views/newstartTradepage.vue'





Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },

  {
    path: '/*',
    redirect: { name: 'Home' }
  },

  {
    path: '/signup',
    name: 'signup',
    component: Signup
  },


  // {
  //   path: '/profile',
  //   name: 'profile',
  //   component: profile
  // },

  // {
  //   path: '/loginpage',
  //   name: 'loginpage',
  //   component: login1
  // },

  // {
  //   path: '/createNFT',
  //   name: 'createNFT',
  //   component: createNFT
  // },

  // {
  //   path: '/saleItemInfoPage',
  //   name: 'saleItemInfoPage',
  //   component: saleItemInfoPage
  // },

  // {
  //   path: '/newstartTradepage',
  //   name: 'newstartTradepage',
  //   component: newstartTradepage
  // },


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

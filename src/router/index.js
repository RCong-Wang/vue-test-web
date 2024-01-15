import { createRouter, createWebHistory } from "vue-router";


// const routes = [
//   {
//     path: "/",
//     name: "home",
//     component: HomeView,
//   },
//   {
//     path: "/about",
//     name: "about",
//     // route level code-splitting
//     // this generates a separate chunk (about.[hash].js) for this route
//     // which is lazy-loaded when the route is visited.
//     component: () =>
//       import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
//   },
// ];
const routes = [
    { 
      path: '/',
      component: () => import('../views/Home.vue'),
      name: "Home" ,
      meta: {
        title: 'Onlinetalk',
      }
    },
    { 
      path: '/friend',
      component: () => import('../views/Friend.vue'),
      name:"Friend",
      meta: {
        title: 'Friend',
      }
    },
    { 
      path: '/chatroom',
      component: () => import('../views/Chatroom.vue'),
      name:"Chatroom", 
      meta: {
        title: 'Chatroom',
      }
    },
    {
      path: '/login',
      component: () => import('@/views/Login.vue'),
      name: "Login",
      meta: {
        title: 'Login',
      }
    },
]

const router = createRouter({
  history: createWebHistory(),
  base: '/vue-test-web/',
  routes,
});

router.beforeEach((to, from, next)=>{
  if(to.meta.title){
    document.title = to.meta.title;
  }
  next()
})
export default router;

import Vue from "vue";
import VueRouter from "vue-router";

import auth from '../utils/auth'

const Home = () => import(/* webpackChunkName: "group-home" */"../views/Home.vue");
const User = () => import(/* webpackChunkName: "group-user" */"../views/User.vue");
const Article = () => import(/* webpackChunkName: "group-article" */"../views/article/Index.vue");
const CreateOrUpdate = () => import(/* webpackChunkName: "group-article" */"../views/article/CreateOrUpdate.vue");
const Tags = () => import(/* webpackChunkName: "group-tags" */"../views/tags/Index");
const Upload = () => import(/* webpackChunkName: "group-upload" */"../views/upload/Index.vue");
const Login = () => import(/* webpackChunkName: "group-login" */"../views/login/Login.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/admin",
    name: "Home",
    component: Home,
    children: [
      {
        path: "",
        component: Article
      },
      {
        path: "article/:type",
        component: CreateOrUpdate
      },
      {
        path: "user",
        component: User
      },
      {
        path: "tags",
        component: Tags
      },
      {
        path: "upload",
        component: Upload
      }
    ]
  },
  {
    path: '/adminlogin',
    component: Login
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

router.beforeEach((to, from, next) => {
  if (to.path === '/adminlogin') {
    next()
    return
  }
  if (!auth()) {
    next({
      path: '/adminlogin',
      query: { redirect: to.fullPath }
    })
  } else {
    next()
  }
})

export default router;

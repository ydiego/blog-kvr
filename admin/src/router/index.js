import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import(/* webpackChunkName: "group-home" */"../views/Home.vue");
const User = () => import(/* webpackChunkName: "group-user" */"../views/User.vue");
const Article = () => import(/* webpackChunkName: "group-article" */"../views/article/Index.vue");
const CreateOrUpdate = () => import(/* webpackChunkName: "group-article" */"../views/article/CreateOrUpdate.vue");
const Tags = () => import(/* webpackChunkName: "group-tags" */"../views//tags/Index");

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
      }
    ]
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

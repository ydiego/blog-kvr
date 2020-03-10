import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import User from "../views/User.vue";
import Article from "../views/article/Index.vue";
import CreateOrUpdate from "../views/article/CreateOrUpdate.vue";
import Tags from "../views//tags/Index";

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
        path: "article/create",
        component: CreateOrUpdate
      },
      {
        path: "article/update",
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

import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";
import Notes from "./views/Notes.vue";
import Users from "./views/Users.vue";
import User from "./views/User.vue";
import News from "./views/News.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/notes",
      name: "Notes",
      component: Notes
    },
    {
      path: "/users",
      name: "Users",
      component: Users
    },
    {
      path: "/news",
      name: "News",
      component: News
    },
    {
      path: "/user/:id",
      name: "User",
      component: User
    }
  ]
});

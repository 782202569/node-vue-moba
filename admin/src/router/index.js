import Vue from "vue"
import VueRouter from "vue-router"
//mport Home from "../views/Home.vue";
import Main from "../views/Main.vue"
import CategoryEdit from "../views/CategoryEdit.vue"
import CategoryList from "../views/CategoryList.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/",
      name: "main",
      component: Main,
      children: [
        {
          path: "/categories/create",
          component: CategoryEdit,
        },
        {
          path: "/categories/list",
          component: CategoryList,
        },
        {
          path: "/categories/edit/:id",
          component: CategoryEdit,
          props: true,
        },
      ],
    },
  ],
})

export default router

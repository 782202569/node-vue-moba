import Vue from "vue"
import VueRouter from "vue-router"
import Login from "../views/login.vue"
import Main from "../views/Main.vue"
// 分类
import CategoryEdit from "../views/CategoryEdit.vue"
import CategoryList from "../views/CategoryList.vue"
// 物品
import itemEdit from "../views/itemEdit.vue"
import itemList from "../views/itemList.vue"
// 英雄
import HeroEdit from "../views/HeroEdit.vue"
import HeroList from "../views/HeroList.vue"
// 文章
import ArticleEdit from "../views/ArticlesEdit.vue"
import ArticleList from "../views/ArticlesList.vue"
// 广告位
import AdEdit from "../views/AdEdit.vue"
import AdList from "../views/AdList.vue"
// 管理员
import AdminUserEdit from "../views/AdminUserEdit.vue"
import AdminUserList from "../views/AdminUserList.vue"

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: "/login",
      name: "login",
      component: Login,
      meta: { isPublic: true },
    },
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

        {
          path: "/items/create",
          component: itemEdit,
        },
        {
          path: "/items/list",
          component: itemList,
        },
        {
          path: "/items/edit/:id",
          component: itemEdit,
          props: true,
        },

        {
          path: "/heroes/create",
          component: HeroEdit,
        },
        {
          path: "/heroes/list",
          component: HeroList,
        },
        {
          path: "/heroes/edit/:id",
          component: HeroEdit,
          props: true,
        },

        {
          path: "/Articles/create",
          component: ArticleEdit,
        },
        {
          path: "/Articles/list",
          component: ArticleList,
        },
        {
          path: "/Articles/edit/:id",
          component: ArticleEdit,
          props: true,
        },

        {
          path: "/Ads/create",
          component: AdEdit,
        },
        {
          path: "/Ads/list",
          component: AdList,
        },
        {
          path: "/Ads/edit/:id",
          component: AdEdit,
          props: true,
        },

        {
          path: "/admin_users/create",
          component: AdminUserEdit,
        },
        {
          path: "/admin_users/list",
          component: AdminUserList,
        },
        {
          path: "/admin_users/edit/:id",
          component: AdminUserEdit,
          props: true,
        },
      ],
    },
  ],
})
router.beforeEach((to, from, next) => {
  if (!to.meta.isPublic && !localStorage.token) {
    return next("/login")
  }
  next()
})
export default router

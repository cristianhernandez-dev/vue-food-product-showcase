import { createRouter, createWebHashHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import ProductDetailView from "../views/ProductDetailView.vue";
import FavoritesView from "../views/FavoritesView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/product/:id",
    name: "product-detail",
    component: ProductDetailView,
    props: true,
  },
  {
    path: "/favorites",
    name: "favorites",
    component: FavoritesView,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
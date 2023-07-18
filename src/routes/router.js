import { createRouter, createWebHistory } from "vue-router";

import About from "@/pages/About.vue";
import Checkout from "@/pages/Checkout.vue";
import Products from "@/pages/Products.vue";
import ProductDetail from "@/pages/ProductDetail.vue";
import ShoppingCart from "@/pages/ShoppingCart.vue";
import SignIn from "@/pages/SignIn.vue";
import SignUp from "@/pages/SignUp.vue";
import Wishlist from "@/pages/Wishlist.vue";
import MyAccount from "@/pages/MyAccount.vue";
import NotFound from "@/pages/NotFound.vue";
import { useAuthStore } from "@/stores/auth";

const routes = [
    { path: "/", component: Products },
    { path: "/about", component: About },
    { path: "/sign-in", component: SignIn },
    { path: "/sign-up", component: SignUp },
    { path: "/product-list", component: Products },
    { path: "/product-detail/:productId", component: ProductDetail },
    { path: "/checkout", component: Checkout },
    { path: "/shopping-cart", component: ShoppingCart },
    { path: "/my-account", component: MyAccount },
    { path: "/wishlist", component: Wishlist },
    { path: "/404", component: NotFound },

    // catch all redirect to home page
    { path: "/:pathMatch(.*)*", redirect: "/404" },
];

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
});

const requireAuthPages = [
    "/my-account",
    "/shopping-cart",
    "/wishlist",
    "/checkout",
];

router.beforeEach(async (to) => {
    const authRequired = requireAuthPages.includes(to.path);
    const auth = useAuthStore();

    if (authRequired && !auth.token) {
        auth.returnUrl = to.fullPath;
        return "/sign-in";
    }

    if (auth.token && (to.path === "/sign-in" || to.path === "/sign-up")) {
        return "/my-account";
    }
});

export default router;

<script setup>
import { ref, computed } from "vue";
import { useCartStore } from "@/stores/cart";
import SearchBox from '@/components/layouts/SearchBox.vue'
const cartStore = useCartStore();
const isToggleCart = ref(false);

function toggleCart() {
    isToggleCart.value = !isToggleCart.value;
}

const formattedCart = computed(() => cartStore.formattedCart);
const total = computed(() => cartStore.total);
const count = computed(() => cartStore.count);
</script>

<template>
    <div class="header-middle pl-sm-0 pr-sm-0 pl-xs-0 pr-xs-0">
        <div class="container">
            <div class="row">
                <!-- Begin Header Logo Area -->
                <div class="col-lg-3">
                    <div class="logo pb-sm-30 pb-xs-30">
                        <router-link to="/">
                            <img src="/images/menu/logo/1.jpg" alt="" />
                        </router-link>
                    </div>
                </div>
                <!-- Header Logo Area End Here -->
                <!-- Begin Header Middle Right Area -->
                <div class="col-lg-9 pl-0 ml-sm-15 ml-xs-15">
                    <!-- Begin Header Middle Searchbox Area -->
                    <SearchBox />
                    <!-- Header Middle Searchbox Area End Here -->
                    <!-- Begin Header Middle Right Area -->
                    <div class="header-middle-right">
                        <ul class="hm-menu">
                            <!-- Begin Header Middle Wishlist Area -->
                            <li class="hm-wishlist">
                                <router-link to="/wishlist">
                                    <span
                                        class="cart-item-count wishlist-item-count"
                                        >0</span
                                    >
                                    <i class="fa fa-heart-o"></i>
                                </router-link>
                            </li>
                            <!-- Header Middle Wishlist Area End Here -->
                            <!-- Begin Header Mini Cart Area -->
                            <li class="hm-minicart">
                                <div
                                    class="hm-minicart-trigger"
                                    @click="toggleCart"
                                >
                                    <span class="item-icon"></span>
                                    <span class="item-text"
                                        >£{{ total }}
                                        <span class="cart-item-count">{{
                                            count
                                        }}</span>
                                    </span>
                                </div>
                                <span></span>
                                <div
                                    class="minicart"
                                    :class="{ active: isToggleCart }"
                                >
                                    <ul class="minicart-product-list">
                                        <li
                                            v-if="
                                                !cartStore.formattedCart.length
                                            "
                                        >
                                            <span>Cart is empty</span>
                                        </li>

                                        <template
                                            v-for="product in cartStore.formattedCart"
                                        >
                                            <li>
                                                <router-link
                                                    :to="{
                                                        path:
                                                            '/product-detail/' +
                                                            product.id,
                                                    }"
                                                >
                                                    <img
                                                        style="
                                                            width: 40px;
                                                            padding-right: 12px;
                                                        "
                                                        :src="product.image"
                                                        alt="cart products"
                                                    />
                                                </router-link>

                                                <div
                                                    class="minicart-product-details"
                                                >
                                                    <h6>
                                                        <router-link
                                                            :to="{
                                                                path:
                                                                    '/product-detail/' +
                                                                    product.id,
                                                            }"
                                                            >{{
                                                                product.title.substring(
                                                                    0,
                                                                    20
                                                                ) + "..."
                                                            }}
                                                        </router-link>
                                                    </h6>
                                                    <span
                                                        >£{{ product.price }} x
                                                        {{
                                                            product.quantity
                                                        }}</span
                                                    >
                                                </div>
                                                <button
                                                    class="close"
                                                    @click="
                                                        cartStore.removeAllProduct(
                                                            product.id
                                                        )
                                                    "
                                                >
                                                    <i class="fa fa-close"></i>
                                                </button>
                                            </li>
                                        </template>
                                    </ul>
                                    <p class="minicart-total">
                                        SUBTOTAL:
                                        <span>£{{ cartStore.total }}</span>
                                    </p>
                                    <div class="minicart-button">
                                        <router-link
                                            to="/shopping-cart"
                                            class="li-button li-button-dark li-button-fullwidth li-button-sm"
                                            @click="toggleCart"
                                        >
                                            <span>View Full Cart</span>
                                        </router-link>
                                        <router-link
                                            to="/checkout"
                                            @click="toggleCart"
                                            class="li-button li-button-fullwidth"
                                        >
                                            <span>Checkout</span>
                                        </router-link>
                                    </div>
                                </div>
                            </li>
                            <!-- Header Mini Cart Area End Here -->
                        </ul>
                    </div>
                    <!-- Header Middle Right Area End Here -->
                </div>
                <!-- Header Middle Right Area End Here -->
            </div>
        </div>
    </div>
</template>

<style scopted>
.minicart {
    display: none;
    overflow-y: hidden;
    max-height: 0;

    transition: max-height 0.5s ease;
}
.minicart.active {
    display: block;
    max-height: 1000px;
}
</style>
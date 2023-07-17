<script setup>
import RatingStar from "@/components/layouts/RatingStar.vue";
import { useCartStore } from "@/stores/cart";

const cartStore = useCartStore();
defineProps({
    products: {
        type: Array,
        default: [],
    },
});
</script>

<template>
    <div class="tab-pane product-list-view">
        <div class="row">
            <div class="col">
                <template v-for="product in products">
                    <div class="row product-layout-list">
                        <div class="col-lg-3 col-md-5">
                            <div class="product-image">
                                <router-link
                                    :to="{
                                        path: '/product-detail/' + product.id,
                                    }"
                                >
                                    <img
                                        :src="product.image"
                                        alt="Li's Product Image"
                                    />
                                </router-link>
                                <span class="sticker">New</span>
                            </div>
                        </div>
                        <div class="col-lg-5 col-md-7">
                            <div class="product_desc">
                                <div class="product_desc_info">
                                    <div class="product-review">
                                        <h5 class="manufacturer">
                                            <a href="javascript:void(0);">{{
                                                product.category
                                            }}</a>
                                        </h5>
                                        <RatingStar
                                            :star="product.rating.rate"
                                        />
                                    </div>
                                    <h4>
                                        <router-link
                                            class="product_name"
                                            :to="{
                                                path:
                                                    '/product-detail/' +
                                                    product.id,
                                            }"
                                        >
                                            {{ product.title }}
                                        </router-link>
                                    </h4>
                                    <div class="price-box">
                                        <span class="new-price"
                                            >$ {{ product.price }}</span
                                        >
                                    </div>
                                    <p>
                                        {{ product.description }}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-4">
                            <div class="shop-add-action mb-xs-30">
                                <ul class="add-actions-link">
                                    <li class="add-cart">
                                        <a
                                            href="javascript:void(0);"
                                            @click="cartStore.add(product.id)"
                                            >Add to cart</a
                                        >
                                    </li>
                                    <li class="wishlist">
                                        <a href="wishlist.html"
                                            ><i class="fa fa-heart-o"></i>Add to
                                            wishlist</a
                                        >
                                    </li>
                                    <li>
                                        <a
                                            class="quick-view"
                                            data-toggle="modal"
                                            data-target="#exampleModalCenter"
                                            href="#"
                                            ><i class="fa fa-eye"></i>Quick
                                            view</a
                                        >
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>

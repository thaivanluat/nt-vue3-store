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
    <div class="tab-pane">
        <div class="product-area shop-product-area">
            <div class="row">
                <template v-for="product in products">
                    <div class="col-lg-4 col-md-4 col-sm-6 mt-40">
                        <!-- single-product-wrap start -->
                        <div class="single-product-wrap">
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
                                            >${{ product.price }}</span
                                        >
                                    </div>
                                </div>
                                <div class="add-actions">
                                    <ul class="add-actions-link">
                                        <li class="add-cart active">
                                            <a
                                                href="javascript:void(0);"
                                                @click="
                                                    cartStore.add(product.id)
                                                "
                                                >Add to cart</a
                                            >
                                        </li>
                                        <li>
                                            <a
                                                href="#"
                                                title="quick view"
                                                class="quick-view-btn"
                                                data-toggle="modal"
                                                data-target="#exampleModalCenter"
                                                ><i class="fa fa-eye"></i
                                            ></a>
                                        </li>
                                        <li>
                                            <a
                                                class="links-details"
                                                href="wishlist.html"
                                                ><i class="fa fa-heart-o"></i
                                            ></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <!-- single-product-wrap end -->
                    </div>
                </template>
            </div>
        </div>
    </div>
</template>


<style scoped>
.product-image > a img {
    height: 250px;
}
</style>

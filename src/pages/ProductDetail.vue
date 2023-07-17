<script setup>
import { ref, watch } from "vue";
import Breadcrumb from "@/components/layouts/Breadcrumb.vue";
import { useAlertStore } from "@/stores/alert";
import { useCartStore } from "@/stores/cart";
import { useRoute } from "vue-router";
import RatingStar from "@/components/layouts/RatingStar.vue";
import Loading from "@/components/layouts/Loading.vue";
import { onBeforeRouteUpdate } from "vue-router";

const alertStore = useAlertStore();
const cartStore = useCartStore();

const product = ref({});
const quanlity = ref(1);

const breadCrumb = "Single product";
const route = useRoute();
const productId = ref(route.params.productId);

async function getProduct() {
    alertStore.setLoading(true);
    await fetch("https://fakestoreapi.com/products/" + productId.value)
        .then((res) => res.json())
        .then((json) => {
            if (json) {
                alertStore.setLoading(false);
                product.value = json;
            } else {
                console.log("errors", json);
            }
        });
}

function decreaseQuantity() {
    if (quanlity === 1) return;
    else quanlity--;
}

function onAddToCart(productId, quanlity) {
    cartStore.add(productId, quanlity);
}

getProduct();
watch(
    () => route.params.productId,
    async (newId) => {
        console.log(newId);
        productId.value = newId;
        getProduct();
    }
);
</script>

<template>
    <Breadcrumb :name="breadCrumb" />

    <template v-if="alertStore.loading">
        <Loading />
    </template>
    <template v-else>
        <div class="content-wraper">
            <div class="container">
                <div class="row single-product-area">
                    <div class="col-lg-5 col-md-6">
                        <div class="sm-image">
                            <img :src="product.image" alt="product image" />
                        </div>
                    </div>

                    <div class="col-lg-7 col-md-6">
                        <div class="product-details-view-content pt-60">
                            <div class="product-info">
                                <h2>{{ product.title }}</h2>
                                <span class="product-details-ref">{{
                                    product.category
                                }}</span>
                                <div class="pt-20">
                                    <RatingStar :star="product.rating?.rate" />
                                </div>
                                <div class="price-box pt-20">
                                    <span class="new-price new-price-2"
                                        >$ {{ product.price }}</span
                                    >
                                </div>
                                <div class="product-desc">
                                    <p>
                                        <span>{{ product.description }} </span>
                                    </p>
                                </div>
                                <div class="single-add-to-cart">
                                    <form @submit.prevent class="cart-quantity">
                                        <div class="quantity">
                                            <label>Quantity</label>
                                            <div class="cart-plus-minus">
                                                <input
                                                    class="cart-plus-minus-box"
                                                    :value="quanlity"
                                                    @input="
                                                        ($event) =>
                                                            (quanlity =
                                                                $event.target
                                                                    .value)
                                                    "
                                                    type="number"
                                                />
                                                <div
                                                    class="dec qtybutton"
                                                    @click="decreaseQuantity"
                                                >
                                                    <i
                                                        class="fa fa-angle-down"
                                                    ></i>
                                                </div>
                                                <div
                                                    class="inc qtybutton"
                                                    @click="quanlity++"
                                                >
                                                    <i
                                                        class="fa fa-angle-up"
                                                    ></i>
                                                </div>
                                            </div>
                                        </div>
                                        <button
                                            class="add-to-cart"
                                            type="submit"
                                            @click="
                                                onAddToCart(productId, quanlity)
                                            "
                                        >
                                            Add to cart
                                        </button>
                                    </form>
                                </div>
                                <div class="product-additional-info pt-25">
                                    <a class="wishlist-btn" href="wishlist.html"
                                        ><i class="fa fa-heart-o"></i>Add to
                                        wishlist</a
                                    >
                                    <div class="product-social-sharing pt-25">
                                        <ul>
                                            <li class="facebook">
                                                <a href="#"
                                                    ><i
                                                        class="fa fa-facebook"
                                                    ></i
                                                    >Facebook</a
                                                >
                                            </li>
                                            <li class="twitter">
                                                <a href="#"
                                                    ><i
                                                        class="fa fa-twitter"
                                                    ></i
                                                    >Twitter</a
                                                >
                                            </li>
                                            <li class="google-plus">
                                                <a href="#"
                                                    ><i
                                                        class="fa fa-google-plus"
                                                    ></i
                                                    >Google +</a
                                                >
                                            </li>
                                            <li class="instagram">
                                                <a href="#"
                                                    ><i
                                                        class="fa fa-instagram"
                                                    ></i
                                                    >Instagram</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div class="block-reassurance">
                                    <ul>
                                        <li>
                                            <div class="reassurance-item">
                                                <div class="reassurance-icon">
                                                    <i
                                                        class="fa fa-check-square-o"
                                                    ></i>
                                                </div>
                                                <p>
                                                    Security policy (edit with
                                                    Customer reassurance module)
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="reassurance-item">
                                                <div class="reassurance-icon">
                                                    <i class="fa fa-truck"></i>
                                                </div>
                                                <p>
                                                    Delivery policy (edit with
                                                    Customer reassurance module)
                                                </p>
                                            </div>
                                        </li>
                                        <li>
                                            <div class="reassurance-item">
                                                <div class="reassurance-icon">
                                                    <i
                                                        class="fa fa-exchange"
                                                    ></i>
                                                </div>
                                                <p>
                                                    Return policy (edit with
                                                    Customer reassurance module)
                                                </p>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="product-area pt-35">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="li-product-tab">
                            <ul class="nav li-product-menu">
                                <li>
                                    <a
                                        class="active show"
                                        data-toggle="tab"
                                        href="#description"
                                        ><span>Description</span></a
                                    >
                                </li>
                            </ul>
                        </div>
                        <!-- Begin Li's Tab Menu Content Area -->
                    </div>
                </div>
                <div class="tab-content">
                    <div
                        id="description"
                        class="tab-pane active show"
                        role="tabpanel"
                    >
                        <div class="product-description">
                            <span>{{ product.description }}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </template>
</template>

<style scoped>
.product-details-ref {
    text-transform: capitalize;
}

.sm-image > img {
    width: 100%;
}
</style>
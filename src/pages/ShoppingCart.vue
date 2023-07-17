<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
import Breadcrumb from "@/components/layouts/Breadcrumb.vue";

const breadCrumb = "Shopping Cart";
const cartStore = useCartStore();
</script>

<template>
    <Breadcrumb :name="breadCrumb" />
    <div class="Shopping-cart-area pt-60 pb-60">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <form @submit.prevent>
                        <div class="table-content table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="li-product-remove">
                                            remove
                                        </th>
                                        <th class="li-product-thumbnail">
                                            images
                                        </th>
                                        <th class="cart-product-name">
                                            Product
                                        </th>
                                        <th class="li-product-price">
                                            Unit Price
                                        </th>
                                        <th class="li-product-quantity">
                                            Quantity
                                        </th>
                                        <th class="li-product-subtotal">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template
                                        v-for="product in cartStore.formattedCart"
                                    >
                                        <tr>
                                            <td class="li-product-remove">
                                                <a
                                                    href="javascript:void(0);"
                                                    @click="
                                                        cartStore.removeAllProduct(
                                                            product.id
                                                        )
                                                    "
                                                    ><i class="fa fa-times"></i
                                                ></a>
                                            </td>
                                            <td class="li-product-thumbnail">
                                                <router-link
                                                    :to="{
                                                        path:
                                                            '/product-detail/' +
                                                            product.id,
                                                    }"
                                                >
                                                    <img
                                                        style="height: 150px"
                                                        :src="product.image"
                                                        alt="Li's Product Image"
                                                    />
                                                </router-link>
                                            </td>
                                            <td class="li-product-name">
                                                <router-link
                                                    :to="{
                                                        path:
                                                            '/product-detail/' +
                                                            product.id,
                                                    }"
                                                >
                                                    {{ product.name }}
                                                </router-link>
                                            </td>
                                            <td class="li-product-price">
                                                <span class="amount"
                                                    >${{ product.price }}</span
                                                >
                                            </td>
                                            <td class="quantity">
                                                <label>Quantity</label>
                                                <div class="cart-plus-minus">
                                                    <input
                                                        class="cart-plus-minus-box"
                                                        :value="
                                                            product.quantity
                                                        "
                                                        type="text"
                                                    />
                                                    <div
                                                        class="dec qtybutton"
                                                        @click="
                                                            cartStore.remove(
                                                                product.id
                                                            )
                                                        "
                                                    >
                                                        <i
                                                            class="fa fa-angle-down"
                                                        ></i>
                                                    </div>
                                                    <div
                                                        class="inc qtybutton"
                                                        @click="
                                                            cartStore.add(
                                                                product.id
                                                            )
                                                        "
                                                    >
                                                        <i
                                                            class="fa fa-angle-up"
                                                        ></i>
                                                    </div>
                                                </div>
                                            </td>
                                            <td class="product-subtotal">
                                                <span class="amount"
                                                    >${{
                                                        product.cost
                                                    }}</span
                                                >
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                            </table>
                        </div>
                        <div class="row">
                            <div class="col-12">
                                <div class="coupon-all">
                                    <div class="coupon">
                                        <input
                                            id="coupon_code"
                                            class="input-text"
                                            name="coupon_code"
                                            value=""
                                            placeholder="Coupon code"
                                            type="text"
                                        />
                                        <input
                                            class="button"
                                            name="apply_coupon"
                                            value="Apply coupon"
                                            type="submit"
                                        />
                                    </div>
                                    <div class="coupon2">
                                        <input
                                            class="button"
                                            name="update_cart"
                                            value="Remove All"
                                            
                                            @click="cartStore.removeAll"
                                            type="submit"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="row">
                            <div class="col-md-5 ml-auto">
                                <div class="cart-page-total">
                                    <h2>Cart totals</h2>
                                    <ul>
                                        <li>
                                            Subtotal
                                            <span>${{ cartStore.total }}</span>
                                        </li>
                                        <li>
                                            Total
                                            <span>${{ cartStore.total }}</span>
                                        </li>
                                    </ul>
                                    <router-link to="/checkout"
                                        >Proceed to checkout</router-link
                                    >
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

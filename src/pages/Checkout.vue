<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
import { useAuthStore } from "@/stores/auth";
import Breadcrumb from "@/components/layouts/Breadcrumb.vue";

const breadCrumb = "Checkout";
const cartStore = useCartStore();
const authStore = useAuthStore();

function placeOrder() {
    alert("Place order successfully");
    cartStore.removeAll();
}

const user = authStore.user;
</script>

<template>
    <Breadcrumb :name="breadCrumb" />
    <div class="checkout-area pt-60 pb-30">
        <div class="container">
            <div class="row">
                <div class="col-lg-6 col-12">
                    <form action="#">
                        <div class="checkbox-form">
                            <h3>Billing Details</h3>
                            <div class="row">
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label
                                            >First Name
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input
                                            placeholder=""
                                            type="text"
                                            :value="user.name.firstname"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label
                                            >Last Name
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input
                                            placeholder=""
                                            type="text"
                                            :value="user.name.lastname"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label
                                            >Address
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input
                                            placeholder="Street address"
                                            type="text"
                                            :value="user.address.street"
                                        />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label
                                            >Town / City
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input type="text" :value="user.address.city" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label
                                            >Postcode / Zip
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input placeholder="" type="text" :value="user.address.zipcode" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label
                                            >Email Address
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input placeholder="" type="email" :value="user.email" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label
                                            >Phone
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input type="text" :value="user.phone" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-lg-6 col-12">
                    <div class="your-order">
                        <h3>Your order</h3>
                        <div class="your-order-table table-responsive">
                            <table class="table">
                                <thead>
                                    <tr>
                                        <th class="cart-product-name">
                                            Product
                                        </th>
                                        <th class="cart-product-total">
                                            Total
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <template
                                        v-for="product in cartStore.formattedCart"
                                    >
                                        <tr class="cart_item">
                                            <td
                                                class="cart-product-name"
                                                :title="product.title"
                                            >
                                                {{
                                                    product.title.substring(
                                                        0,
                                                        30
                                                    ) + "..."
                                                }}<strong
                                                    class="product-quantity"
                                                >
                                                    ×
                                                    {{
                                                        product.quantity
                                                    }}</strong
                                                >
                                            </td>
                                            <td class="cart-product-total">
                                                <span class="amount"
                                                    >£{{ product.cost }}</span
                                                >
                                            </td>
                                        </tr>
                                    </template>
                                </tbody>
                                <tfoot>
                                    <tr class="cart-subtotal">
                                        <th>Cart Subtotal</th>
                                        <td>
                                            <span class="amount"
                                                >£{{ cartStore.total }}</span
                                            >
                                        </td>
                                    </tr>
                                    <tr class="order-total">
                                        <th>Order Total</th>
                                        <td>
                                            <strong
                                                ><span class="amount"
                                                    >£{{
                                                        cartStore.total
                                                    }}</span
                                                ></strong
                                            >
                                        </td>
                                    </tr>
                                </tfoot>
                            </table>
                        </div>
                        <div class="payment-method">
                            <div class="payment-accordion">
                                <div id="accordion">
                                    <div class="card">
                                        <div
                                            class="card-header"
                                            id="#payment-1"
                                        >
                                            <h5 class="panel-title">
                                                <a
                                                    class=""
                                                    data-toggle="collapse"
                                                    data-target="#collapseOne"
                                                    aria-expanded="true"
                                                    aria-controls="collapseOne"
                                                >
                                                    Direct Bank Transfer.
                                                </a>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseOne"
                                            class="collapse show"
                                            data-parent="#accordion"
                                        >
                                            <div class="card-body">
                                                <p>
                                                    Make your payment directly
                                                    into our bank account.
                                                    Please use your Order ID as
                                                    the payment reference. Your
                                                    order won’t be shipped until
                                                    the funds have cleared in
                                                    our account.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div
                                            class="card-header"
                                            id="#payment-2"
                                        >
                                            <h5 class="panel-title">
                                                <a
                                                    class="collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseTwo"
                                                    aria-expanded="false"
                                                    aria-controls="collapseTwo"
                                                >
                                                    Cheque Payment
                                                </a>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseTwo"
                                            class="collapse"
                                            data-parent="#accordion"
                                        >
                                            <div class="card-body">
                                                <p>
                                                    Make your payment directly
                                                    into our bank account.
                                                    Please use your Order ID as
                                                    the payment reference. Your
                                                    order won’t be shipped until
                                                    the funds have cleared in
                                                    our account.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="card">
                                        <div
                                            class="card-header"
                                            id="#payment-3"
                                        >
                                            <h5 class="panel-title">
                                                <a
                                                    class="collapsed"
                                                    data-toggle="collapse"
                                                    data-target="#collapseThree"
                                                    aria-expanded="false"
                                                    aria-controls="collapseThree"
                                                >
                                                    PayPal
                                                </a>
                                            </h5>
                                        </div>
                                        <div
                                            id="collapseThree"
                                            class="collapse"
                                            data-parent="#accordion"
                                        >
                                            <div class="card-body">
                                                <p>
                                                    Make your payment directly
                                                    into our bank account.
                                                    Please use your Order ID as
                                                    the payment reference. Your
                                                    order won’t be shipped until
                                                    the funds have cleared in
                                                    our account.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="order-button-payment">
                                    <input
                                        @click="placeOrder"
                                        value="Place order"
                                        type="submit"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useCartStore } from "@/stores/cart";
import Breadcrumb from "@/components/layouts/Breadcrumb.vue";

const breadCrumb = "Checkout";
const cartStore = useCartStore();

function placeOrder() {
    alert("Place order successfully");
    cartStore.removeAll();
}
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
                                <div class="col-md-12">
                                    <div class="country-select clearfix">
                                        <label
                                            >Country
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <select
                                            class="nice-select wide"
                                            style="display: none"
                                        >
                                            <option data-display="Bangladesh">
                                                Bangladesh
                                            </option>
                                            <option value="uk">London</option>
                                            <option value="rou">Romania</option>
                                            <option value="fr">French</option>
                                            <option value="de">Germany</option>
                                            <option value="aus">
                                                Australia
                                            </option>
                                        </select>
                                        <div
                                            class="nice-select wide"
                                            tabindex="0"
                                        >
                                            <span class="current"
                                                >Bangladesh</span
                                            >
                                            <ul class="list">
                                                <li
                                                    data-value="Bangladesh"
                                                    data-display="Bangladesh"
                                                    class="option selected"
                                                >
                                                    Bangladesh
                                                </li>
                                                <li
                                                    data-value="uk"
                                                    class="option"
                                                >
                                                    London
                                                </li>
                                                <li
                                                    data-value="rou"
                                                    class="option"
                                                >
                                                    Romania
                                                </li>
                                                <li
                                                    data-value="fr"
                                                    class="option"
                                                >
                                                    French
                                                </li>
                                                <li
                                                    data-value="de"
                                                    class="option"
                                                >
                                                    Germany
                                                </li>
                                                <li
                                                    data-value="aus"
                                                    class="option"
                                                >
                                                    Australia
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label
                                            >First Name
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input placeholder="" type="text" />
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
                                        <input placeholder="" type="text" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <label>Company Name</label>
                                        <input placeholder="" type="text" />
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
                                        />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list">
                                        <input
                                            placeholder="Apartment, suite, unit etc. (optional)"
                                            type="text"
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
                                        <input type="text" />
                                    </div>
                                </div>
                                <div class="col-md-6">
                                    <div class="checkout-form-list">
                                        <label
                                            >State / County
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input placeholder="" type="text" />
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
                                        <input placeholder="" type="text" />
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
                                        <input placeholder="" type="email" />
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
                                        <input type="text" />
                                    </div>
                                </div>
                                <div class="col-md-12">
                                    <div class="checkout-form-list create-acc">
                                        <input id="cbox" type="checkbox" />
                                        <label>Create an account?</label>
                                    </div>
                                    <div
                                        id="cbox-info"
                                        class="checkout-form-list create-account"
                                    >
                                        <p>
                                            Create an account by entering the
                                            information below. If you are a
                                            returning customer please login at
                                            the top of the page.
                                        </p>
                                        <label
                                            >Account password
                                            <span class="required"
                                                >*</span
                                            ></label
                                        >
                                        <input
                                            placeholder="password"
                                            type="password"
                                        />
                                    </div>
                                </div>
                            </div>
                            <div class="different-address">
                                <div class="ship-different-title">
                                    <h3>
                                        <label
                                            >Ship to a different address?</label
                                        >
                                        <input id="ship-box" type="checkbox" />
                                    </h3>
                                </div>
                                <div id="ship-box-info" class="row">
                                    <div class="col-md-12">
                                        <div class="country-select clearfix">
                                            <label
                                                >Country
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <select
                                                class="nice-select wide"
                                                style="display: none"
                                            >
                                                <option
                                                    data-display="Bangladesh"
                                                >
                                                    Bangladesh
                                                </option>
                                                <option value="uk">
                                                    London
                                                </option>
                                                <option value="rou">
                                                    Romania
                                                </option>
                                                <option value="fr">
                                                    French
                                                </option>
                                                <option value="de">
                                                    Germany
                                                </option>
                                                <option value="aus">
                                                    Australia
                                                </option>
                                            </select>
                                            <div
                                                class="nice-select wide"
                                                tabindex="0"
                                            >
                                                <span class="current"
                                                    >Bangladesh</span
                                                >
                                                <ul class="list">
                                                    <li
                                                        data-value="Bangladesh"
                                                        data-display="Bangladesh"
                                                        class="option selected"
                                                    >
                                                        Bangladesh
                                                    </li>
                                                    <li
                                                        data-value="uk"
                                                        class="option"
                                                    >
                                                        London
                                                    </li>
                                                    <li
                                                        data-value="rou"
                                                        class="option"
                                                    >
                                                        Romania
                                                    </li>
                                                    <li
                                                        data-value="fr"
                                                        class="option"
                                                    >
                                                        French
                                                    </li>
                                                    <li
                                                        data-value="de"
                                                        class="option"
                                                    >
                                                        Germany
                                                    </li>
                                                    <li
                                                        data-value="aus"
                                                        class="option"
                                                    >
                                                        Australia
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label
                                                >First Name
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input placeholder="" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label
                                                >Last Name
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input placeholder="" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label>Company Name</label>
                                            <input placeholder="" type="text" />
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
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <input
                                                placeholder="Apartment, suite, unit etc. (optional)"
                                                type="text"
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
                                            <input type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label
                                                >State / County
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input placeholder="" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label
                                                >Postcode / Zip
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input placeholder="" type="text" />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label
                                                >Email Address
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input
                                                placeholder=""
                                                type="email"
                                            />
                                        </div>
                                    </div>
                                    <div class="col-md-12">
                                        <div class="checkout-form-list">
                                            <label
                                                >Phone
                                                <span class="required"
                                                    >*</span
                                                ></label
                                            >
                                            <input type="text" />
                                        </div>
                                    </div>
                                </div>
                                <div class="order-notes">
                                    <div class="checkout-form-list">
                                        <label>Order Notes</label>
                                        <textarea
                                            id="checkout-mess"
                                            cols="30"
                                            rows="10"
                                            placeholder="Notes about your order, e.g. special notes for delivery."
                                        ></textarea>
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

<script setup>
import { useAuthStore } from "@/stores/auth";
import { ref } from "vue";
import { computed } from "vue";

const isOpenSetting = ref(false);
const authStore = useAuthStore();

const isLogin = computed(() => (authStore.token ? true : false));

function openSetting() {
    isOpenSetting.value = !isOpenSetting.value;
}

function logout() {
    authStore.logout();
}
</script>

<template>
    <div class="header-top">
        <div class="container">
            <div class="row">
                <!-- Begin Header Top Left Area -->
                <div class="col-lg-3 col-md-4">
                    <div class="header-top-left">
                        <ul class="phone-wrap">
                            <li>
                                <span>Telephone Enquiry:</span
                                ><a href="#">(+123) 123 321 345</a>
                            </li>
                        </ul>
                    </div>
                </div>
                <!-- Header Top Left Area End Here -->
                <!-- Begin Header Top Right Area -->
                <div class="col-lg-9 col-md-8">
                    <div class="header-top-right">
                        <ul class="ht-menu">
                            <!-- Begin Setting Area -->
                            <li>
                                <div
                                    class="ht-setting-trigger"
                                    @click="openSetting"
                                >
                                    <span>Setting</span>
                                </div>
                                <div
                                    class="setting ht-setting"
                                    :class="{ active: isOpenSetting }"
                                >
                                    <ul
                                        class="ht-setting-list"
                                        @click="openSetting"
                                    >
                                        <li>
                                            <router-link to="/my-account"
                                                >My Account</router-link
                                            >
                                        </li>
                                        <li>
                                            <router-link to="/checkout"
                                                >Checkout</router-link
                                            >
                                        </li>
                                        <template v-if="isLogin">
                                            <li>
                                                <a
                                                    href="#"
                                                    @click.prevent="logout"
                                                    >Logout</a
                                                >
                                            </li>
                                        </template>
                                        <template v-else>
                                            <li>
                                                <router-link to="/sign-in"
                                                    >Login</router-link
                                                >
                                            </li>
                                            <li>
                                                <router-link to="/sign-up"
                                                    >Register</router-link
                                                >
                                            </li>
                                        </template>
                                    </ul>
                                </div>
                            </li>
                            <!-- Setting Area End Here -->
                            <div style="display: none">
                                <!-- Begin Currency Area -->
                                <li>
                                    <span class="currency-selector-wrapper"
                                        >Currency :</span
                                    >
                                    <div class="ht-currency-trigger">
                                        <span>USD $</span>
                                    </div>
                                    <div class="currency ht-currency">
                                        <ul class="ht-setting-list">
                                            <li><a href="#">EUR €</a></li>
                                            <li class="active">
                                                <a href="#">USD $</a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <!-- Currency Area End Here -->
                                <!-- Begin Language Area -->
                                <li>
                                    <span class="language-selector-wrapper"
                                        >Language :</span
                                    >
                                    <div class="ht-language-trigger">
                                        <span>English</span>
                                    </div>
                                    <div class="language ht-language">
                                        <ul class="ht-setting-list">
                                            <li class="active">
                                                <a href="#"
                                                    ><img
                                                        src="/images/menu/flag-icon/1.jpg"
                                                        alt=""
                                                    />English</a
                                                >
                                            </li>
                                            <li>
                                                <a href="#"
                                                    ><img
                                                        src="/images/menu/flag-icon/2.jpg"
                                                        alt=""
                                                    />Français</a
                                                >
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <!-- Language Area End Here -->
                            </div>
                        </ul>
                    </div>
                </div>
                <!-- Header Top Right Area End Here -->
            </div>
        </div>
    </div>
</template>

<style scoped>
.active {
    display: block;
}
</style>
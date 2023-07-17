<script setup>
import { onUnmounted } from "vue";
import MainLayout from "@/layouts/MainLayout.vue";
import { useProductStore } from "@/stores/product";
import { useCartStore } from "@/stores/cart";

const productStore = useProductStore();
const cartStore = useCartStore();

productStore.fetchAllProduct();

const unsub = cartStore.$subscribe(() => {
    localStorage.setItem("cart", JSON.stringify(cartStore.cart));
});

onUnmounted(() => {
    unsub();
});
</script>

<template>
    <main-layout>
        <router-view></router-view>
    </main-layout>
</template>


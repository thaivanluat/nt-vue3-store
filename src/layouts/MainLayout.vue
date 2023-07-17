<script setup>
import Header from '@/components/layouts/Header.vue'
import Footer from '@/components/layouts/Footer.vue'
import ProductModal from '@/components/layouts/ProductModal.vue'
</script>

<template>
    <div class="body-wrapper">
        <Header />
        <slot></slot>
        <Footer />
        <ProdcutModal />
    </div>
</template>
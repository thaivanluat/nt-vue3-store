<script setup>
import { useProductStore } from "@/stores/product";
import { ref, computed } from "vue";

const productStore = useProductStore();
const input = ref("");

const searchResults = computed(() => {
    if (!input.value || input.value.length < 2) return [];

    return productStore.list.filter((item) => {
        return item.title.toLowerCase().includes(input.value.toLowerCase());
    });
});
</script>


<template>
    <form @submit.prevent action="#" class="hm-searchbox">
        <input
            v-model="input"
            type="text"
            placeholder="Enter your search key ..."
        />
        <button class="li-btn" type="submit">
            <i class="fa fa-search"></i>
        </button>
    </form>
</template>
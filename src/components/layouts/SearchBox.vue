<script setup>
import { useProductStore } from "@/stores/product";
import { ref, computed, onMounted } from "vue";
import { useRouter } from "vue-router";

const productStore = useProductStore();
const input = ref("");
const router = useRouter();

const searchResults = computed(() => {
    if (!input.value) return [];

    return productStore.productArray
        .filter((item) => {
            return item.title.toLowerCase().includes(input.value.toLowerCase());
        })
        .slice(0, 5);
});
function navigate(productId) {
    input.value = "";
    router.push(`/product-detail/${productId}`);
}

onMounted(() => {
    document.addEventListener("click", (e) => {
        let search = document.getElementById("searchBox");
        if (search !== undefined && search.contains(e.target) === false) {
            //click outside!
            input.value = "";
        }
    });
});
</script>


<template>
    <form @submit.prevent action="#" class="hm-searchbox">
        <input
            id="searchBox"
            v-model="input"
            type="text"
            placeholder="Enter your search key ..."
        />
        <button class="li-btn" type="submit">
            <i class="fa fa-search"></i>
        </button>
        <div v-if="input.length">
            <div class="search-result">
                <ul class="product-list" v-if="searchResults.length">
                    <template v-for="item in searchResults">
                        <li @click="navigate(item.id)">
                            <router-link
                                :to="{
                                    path: '/product-detail/' + item.id,
                                }"
                            >
                                <img
                                    style="width: 40px; padding-right: 12px"
                                    :src="item.image"
                                    alt="cart products"
                                />
                                <span>{{ item.title }}</span>
                            </router-link>
                        </li>
                    </template>
                </ul>
                <ul class="product-list" v-else>
                    <span>No product found</span>
                </ul>
            </div>
        </div>
    </form>
</template>

<style scoped>
.search-result {
    position: absolute;
    left: 0;
    top: 100%;
    z-index: 9;
    border: 1px solid #e5e5e5;
    padding: 20px;
    width: 290px;
    background: #ffffff;
    text-align: left;
    -webkit-box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.2);
    width: 93%;
}

.product-list > li {
    border-bottom: 1px solid #e5e5e5;
    padding: 10px 0;
}
</style>
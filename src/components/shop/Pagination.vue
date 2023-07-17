<script setup>
import { ref } from "vue";
import { useProductStore } from "@/stores/product";
const productStore = useProductStore();

const pages = Array.from(
    { length: productStore.totalPage },
    (_, i) => i + 1
).slice(0, 10);
</script>

<template>
    <div class="paginatoin-area">
        <div class="row">
            <div class="col-lg-6 col-md-6">
                <p>
                    Showing {{ productStore.getShowingText }} of
                    {{ productStore.productArray.length }} item(s)
                </p>
            </div>
            <div class="col-lg-6 col-md-6">
                <ul class="pagination-box">
                    <li v-if="productStore.currentPage > 1">
                        <a
                            href="javascript:;"
                            class="Previous"
                            @click="
                                productStore.changePage(
                                    productStore.currentPage - 1
                                )
                            "
                            ><i class="fa fa-chevron-left"></i> Previous</a
                        >
                    </li>
                    <template v-for="(page, key) in pages" :key="key">
                        <li
                            :class="{
                                active: page === productStore.currentPage,
                            }"
                        >
                            <a
                                href="javascript:;"
                                @click="productStore.changePage(page)"
                                >{{ page }}</a
                            >
                        </li>
                    </template>
                    <li
                        v-if="
                            productStore.currentPage != productStore.totalPage
                        "
                    >
                        <a
                            href="javascript:;"
                            class="Next"
                            @click="
                                productStore.changePage(
                                    productStore.currentPage + 1
                                )
                            "
                        >
                            Next <i class="fa fa-chevron-right"></i
                        ></a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>
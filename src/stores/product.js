import { defineStore } from "pinia";
import { useAlertStore } from "@/stores/alert";

export const useProductStore = defineStore({
    id: "product",
    state: () => ({
        products: {},
        currentPage: 1,
        pageSize: 6,
    }),
    getters: {
        loaded() {
            return Object.keys(this.products).length > 0;
        },
        productArray() {
            return Object.values(this.products);
        },
        paginatedProductList() {
            const startIndex = (this.currentPage - 1) * this.pageSize;
            return this.productArray.slice(
                startIndex,
                startIndex + this.pageSize
            );
        },
        totalPage() {
            return Math.ceil(this.productArray.length / this.pageSize);
        },
        getShowingText() {
            let startItem = (this.currentPage - 1) * this.pageSize + 1;
            let endItem = startItem - 1 + this.pageSize;

            if (endItem > this.productArray.length) {
                endItem = this.productArray.length;
            }

            return startItem + "-" + endItem;
        },
    },
    actions: {
        async fetchAllProduct() {
            if (this.loaded) return;

            const alertStore = useAlertStore();

            alertStore.setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            data.forEach((product) => {
                this.products[product.id] = product;
            });
            alertStore.setLoading(false);
        },
        changePage(page) {
            this.currentPage = page;
        },
        changePageSize(pageSize) {
            this.pageSize = pageSize;
        }
    },
});

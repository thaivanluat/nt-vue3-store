import { defineStore } from "pinia";
import { useAlertStore } from "@/stores/alert";

export const useProductStore = defineStore({
    id: "product",
    state: () => ({
        products: {},
    }),
    getters: {
        loaded() {
            return Object.keys(this.products).length > 0;
        },
        productArray() {
            return Object.values(this.products)
        }
    },
    actions: {
        async fetchAllProduct() {
            if (this.loaded) return;

            const alertStore = useAlertStore();

            alertStore.setLoading(true);
            const res = await fetch("https://fakestoreapi.com/products");
            const data = await res.json();
            data.forEach(product => {
                this.products[product.id] = product
            })
            alertStore.setLoading(false);
        },
    },
});

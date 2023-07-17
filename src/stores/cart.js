import { defineStore } from "pinia";
import { useProductStore } from "@/stores/product";

export const useCartStore = defineStore({
    id: "cart",
    state: () => ({
        cart: JSON.parse(localStorage.getItem("cart")) ?? {},
    }),
    getters: {
        count() {
            return Object.keys(this.cart).reduce((acc, id) => {
                return acc + this.cart[id].quantity;
            }, 0);
        },

        total() {
            const productStore = useProductStore();

            if (!productStore.loaded) {
                return 0;
            }

            const total = Object.keys(this.cart).reduce((acc, id) => {
                return (
                    acc +
                    productStore.products[id].price * this.cart[id].quantity
                );
            }, 0);

            return parseFloat(total).toFixed(2);
        },

        formattedCart() {
            const productStore = useProductStore();

            if (!productStore.loaded) {
                return [];
            }

            return Object.keys(this.cart).map((productId) => {
                const purchase = this.cart[productId];

                return {
                    id: purchase.productId,
                    image: productStore.products[purchase.productId].image,
                    title: productStore.products[purchase.productId].title,
                    price: productStore.products[purchase.productId].price,
                    quantity: purchase.quantity,
                    cost: parseFloat(
                        purchase.quantity *
                            productStore.products[purchase.productId].price
                    ).toFixed(2),
                };
            });
        },
    },
    actions: {
        add(productId, quantity = 1) {
            if (this.cart[productId]) {
                this.cart[productId].quantity += quantity;
            } else {
                this.cart[productId] = {
                    productId,
                    quantity: quantity,
                };
            }
        },
        remove(productId) {
            if (!this.cart[productId]) return;

            this.cart[productId].quantity -= 1;

            if (this.cart[productId].quantity === 0)
                delete this.cart[productId];
        },
        removeAllProduct(productId) {
            delete this.cart[productId];
        },
        removeAll() {
            this.cart = {};
        },
    },
});

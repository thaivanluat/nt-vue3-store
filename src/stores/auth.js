import { defineStore } from "pinia";
import router from "@/routes/router";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")),
        token: JSON.parse(localStorage.getItem("token")),
        returnUrl: null,
    }),
    actions: {
        setToken(token) {
            this.token = token;
            localStorage.setItem("token", JSON.stringify(token));
        },
        logout() {
            if (confirm("Are you sure") == true) {
                this.token = null;
                localStorage.removeItem("token");
                router.push("/sign-in");
            }
        },
    },
});

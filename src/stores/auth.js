import { defineStore } from "pinia";
import router from "@/routes/router";

export const useAuthStore = defineStore({
    id: "auth",
    state: () => ({
        user: JSON.parse(localStorage.getItem("user")),
        userId: null,
        token: JSON.parse(localStorage.getItem("token")),
        returnUrl: null,
    }),
    actions: {
        setUser(user) {
            this.user = user;
            localStorage.setItem("user", JSON.stringify(user));
        },
        setUserId(userId) {
            this.userId = userId;
        },
        setToken(token) {
            this.token = token;
            localStorage.setItem("token", JSON.stringify(token));
        },
        logout() {
            if (confirm("Are you sure") == true) {
                this.token = null;
                this.userId = null;
                this.user = null;
                localStorage.removeItem("token");
                localStorage.removeItem("user");
                router.push("/sign-in");
            }
        },
    },
});

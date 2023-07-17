<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useAlertStore } from "@/stores/alert";
import router from "@/routes/router";
import Loading from "@/components/layouts/Loading.vue";

const authStore = useAuthStore();
const alertStore = useAlertStore();

const loginForm = ref({
    username: null,
    password: null,
});

async function onSubmit() {
    alertStore.setLoading(true);
    const { username, password } = loginForm.value;

    const body = JSON.stringify({
        username: username,
        password: password,
    });

    await fetch("https://fakestoreapi.com/auth/login", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: body,
    })
        .then((res) => {
            console.log(res);
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Login fail");
            }
        })
        .then((json) => {
            if (json) {
                console.log(json);
                authStore.setToken(json.token);
                router.push({ path: "/my-account" });
            } else {
                console.log("login fail");
            }
        });

    alertStore.setLoading(false);
}

function autoLogin() {
    loginForm.value.username = "mor_2314";
    loginForm.value.password = "83r5^_";

    onSubmit();
}
</script>

<template>
    <div class="page-section mb-60">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-xs-12 col-lg-6 mb-30">
                    <!-- Login Form s-->
                    <form @submit.prevent>
                        <div class="login-form">
                            <h4 class="login-title">Login</h4>
                            <div v-if="alertStore.loading">
                                <Loading />
                            </div>
                            <div style="margin-bottom: 10px">
                                username: mor_2314 <br />
                                password: 83r5^_ <br />
                            </div>

                            <div class="row">
                                <div class="col-md-12 col-12 mb-20">
                                    <label>Username</label>
                                    <input
                                        class="mb-0"
                                        type="text"
                                        placeholder="Username"
                                        v-model="loginForm.username"
                                    />
                                </div>
                                <div class="col-12 mb-20">
                                    <label>Password</label>
                                    <input
                                        class="mb-0"
                                        type="password"
                                        placeholder="Password"
                                        v-model="loginForm.password"
                                    />
                                </div>
                                <div class="col-md-12">
                                    <button
                                        class="register-button mt-0"
                                        @click="onSubmit"
                                    >
                                        Login
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                <div class="col-sm-12 col-md-12 col-lg-6 col-xs-12">
                    <div class="login-form">
                        <h4 class="login-title">Auto Login</h4>
                        <div class="row">
                            <div class="col-12">
                                <button
                                    class="register-button mt-0"
                                    @click="autoLogin"
                                >
                                    Login
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
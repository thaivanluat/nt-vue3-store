<script setup>
import { ref } from "vue";
import { useAuthStore } from "@/stores/auth";
import { useAlertStore } from "@/stores/alert";
import { useRouter } from "vue-router";
import Loading from "@/components/layouts/Loading.vue";
import Breadcrumb from "@/components/layouts/Breadcrumb.vue";

const breadCrumb = "Register";

const router = useRouter();
const authStore = useAuthStore();
const alertStore = useAlertStore();

const registerForm = ref({
    username: null,
    password: null,
    re_password: null,
    first_name: null,
    last_name: null,
    email: null,
});

async function onSubmit() {
    alertStore.setLoading(true);
    const body = JSON.stringify(registerForm.value);

    await fetch("https://fakestoreapi.com/users", {
        method: "POST",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
        body: body,
    })
        .then((res) => {
            alertStore.setLoading(false);
            console.log(res);
            if (res.status === 200) {
                return res.json();
            } else {
                alert("Register fail");
            }
        })
        .then((json) => {
            if (json) {
                if (json.id) 
                authStore.setToken(json.id);
                authStore.setUserId(json.id);

                router.push({ path: "/my-account" });
            } else {
                console.log("register fail");
            }
        });
}
</script>

<template>
    <Breadcrumb :name="breadCrumb" />
    <div class="page-section mb-60">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
                    <form @submit.prevent="onSubmit" action="#">
                        <div class="login-form">
                            <h4 class="login-title">Register</h4>
                            <div v-if="alertStore.loading">
                                <Loading />
                            </div>
                            <div class="row">
                                <div class="col-md-12 col-12 mb-20">
                                    <label>First Name</label>
                                    <input
                                        class="mb-0"
                                        type="text"
                                        required
                                        v-model="registerForm.first_name"
                                        placeholder="First Name"
                                    />
                                </div>
                                <div class="col-md-12 col-12 mb-20">
                                    <label>Last Name</label>
                                    <input
                                        class="mb-0"
                                        type="text"
                                        v-model="registerForm.last_name"
                                        placeholder="Last Name"
                                    />
                                </div>
                                <div class="col-md-12 mb-20">
                                    <label>Email Address*</label>
                                    <input
                                        class="mb-0"
                                        type="email"
                                        required
                                        v-model="registerForm.email"
                                        placeholder="Email Address"
                                    />
                                </div>
                                <div class="col-md-6 mb-20">
                                    <label>Password</label>
                                    <input
                                        class="mb-0"
                                        type="password"
                                        required
                                        v-model="registerForm.password"
                                        placeholder="Password"
                                    />
                                </div>
                                <div class="col-md-6 mb-20">
                                    <label>Confirm Password</label>
                                    <input
                                        class="mb-0"
                                        type="password"
                                        required
                                        v-model="registerForm.re_password"
                                        placeholder="Confirm Password"
                                    />
                                </div>
                                <div class="col-12">
                                    <button
                                        type="submit"
                                        class="register-button mt-0"
                                    >
                                        Register
                                    </button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

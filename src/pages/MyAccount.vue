<script setup>
import { ref } from "vue";
import { useAlertStore } from "@/stores/alert";
import Breadcrumb from "@/components/layouts/Breadcrumb.vue";

const breadCrumb = "My Account";

const randomUser = ref({
    name: {},
});
const alertStore = useAlertStore();

const updateStatus = ref("");

async function getRandomUser() {
    const randomUserId = Math.floor(Math.random() * 11);

    alertStore.setLoading(true);

    const apiCall = await fetch(
        "https://fakestoreapi.com/users/" + randomUserId
    )
        .then((res) => res.json())
        .then((json) => {
            randomUser.value = json;
            alertStore.setLoading(false);
        });
}
getRandomUser();

async function updateUser() {
    const body = randomUser.value;

    alertStore.setLoading(true);

    const apiCall = await fetch(
        "https://fakestoreapi.com/users/" + randomUser.value.id,
        {
            method: "PUT",
            body: JSON.stringify(body),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        }
    )
        .then((res) => res.json())
        .then((json) => {
            alertStore.setLoading(false);
            updateStatus.value = "success";
            randomUser.value = json;
        });
}
</script>

<template>
    <Breadcrumb :name="breadCrumb" />
    <div class="page-section mb-60">
        <div class="container">
            <div class="row">
                <div class="col-sm-12 col-md-12 col-lg-12 col-xs-12">
                    <form @submit.prevent="updateUser" action="#">
                        <div class="login-form">
                            <h4 class="login-title">My Account</h4>

                            <template v-if="alertStore.loading">
                                Loading
                            </template>

                            <template v-else>
                                <div class="row">
                                    <div class="col-md-12">
                                        <div
                                            v-if="updateStatus === 'success'"
                                            class="alert alert-success"
                                            role="alert"
                                        >
                                            Update user successfully
                                        </div>
                                    </div>
                                    <div class="col-md-6 col-12 mb-20">
                                        <label>First Name</label>
                                        <input
                                            class="mb-0"
                                            type="text"
                                            required
                                            v-model="randomUser.name.firstname"
                                        />
                                    </div>
                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Last Name</label>
                                        <input
                                            class="mb-0"
                                            type="text"
                                            :value="randomUser.name?.lastname"
                                        />
                                    </div>
                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Email Address</label>
                                        <input
                                            class="mb-0"
                                            type="email"
                                            required
                                            :value="randomUser.email"
                                        />
                                    </div>
                                    <div class="col-md-6 col-12 mb-20">
                                        <label>Phone</label>
                                        <input
                                            class="mb-0"
                                            type="text"
                                            :value="randomUser.phone"
                                        />
                                    </div>
                                    <div class="col-md-6 mb-20">
                                        <label>Password</label>
                                        <input
                                            class="mb-0"
                                            type="text"
                                            required
                                            :value="randomUser.password"
                                        />
                                    </div>
                                    <div class="col-md-12">
                                        <button
                                            type="submit"
                                            class="register-button mt-0"
                                        >
                                            Update Account
                                        </button>
                                    </div>
                                </div>
                            </template>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

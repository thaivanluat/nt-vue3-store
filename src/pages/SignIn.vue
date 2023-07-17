<script setup>
import { ref } from "vue";
import SignInForm from "@/components/auth/SignInForm.vue";
import Breadcrumb from "@/components/layouts/Breadcrumb.vue";

const breadCrumb = "Login";
</script>

<template>
    <Breadcrumb :name="breadCrumb" />
    <SignInForm />
</template>

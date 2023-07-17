<script setup>
defineProps({
  name: String,
})

</script>


<template>
    <div class="breadcrumb-area">
                <div class="container">
                    <div class="breadcrumb-content">
                        <ul>
                            <li>
                                <router-link to="/">Home</router-link>
                                </li>
                            <li class="active">{{ name }}</li>
                        </ul>
                    </div>
                </div>
            </div>
</template>
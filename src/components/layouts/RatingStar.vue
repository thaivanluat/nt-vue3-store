<script setup>
defineProps({
    star: Number,
});
</script>


<template>
    <div class="rating-box">
        <ul class="rating">
            <li>
                <i class="fa fa-star-o"></i>
            </li>
            <li>
                <i class="fa fa-star-o"></i>
            </li>
            <li>
                <i class="fa fa-star-o"></i>
            </li>
            <li class="no-star">
                <i class="fa fa-star-o"></i>
            </li>
            <li class="no-star">
                <i class="fa fa-star-o"></i>
            </li>
        </ul>
    </div>
</template>
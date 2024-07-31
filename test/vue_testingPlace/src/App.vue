<template>
    <swiper-container :slides-per-view="3">
        <swiper-slide v-for="(item, index) in 8"
            :key="index">
            <div style="width: 300px;">asdf</div>
        </swiper-slide>
    </swiper-container>
</template>

<script setup lang="ts">

</script>

<style scoped></style>
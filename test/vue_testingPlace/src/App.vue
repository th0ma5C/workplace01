<template>
    <div class="container">
        <a href="" v-for="(imgURL, index) in getImgURL"
            :key="index" @click.prevent>
            <img :src="imgURL" alt="">
        </a>
    </div>
    <div class="btn">
        <button></button>
    </div>
    <div class="pagination"></div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue';

const imgs = [
    { title: 'berry-smoothie' },
    { title: 'fruit' },
    { title: 'loaf' },
    { title: 'tomatoes' },
    { title: 'strawberry-smoothie' },
    { title: 'vegetable' },
    { title: 'water' },
];

const getImgURL = imgs.map(item => {
    return new URL(`./assets/MainBanner/${item.title}.jpg`, import.meta.url).href;
});

onMounted(() => {
    console.log(getImgURL);
})

</script>

<style scoped lang="scss">
@import './assets/basic.scss';

.container {
    display: flex;
    overflow: hidden;
    position: absolute;

    img {
        width: 100vw;
    }
}

.btn {
    position: absolute;
}

.pagination {
    position: absolute;
}
</style>
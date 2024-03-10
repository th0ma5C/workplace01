<template>
    <div class="img-container" ref="img">
        <a href="" v-for="(imgURL, index) in getImgURL"
            :key="index" :style="swiperStyle"
            @click.prevent>
            <img :src="imgURL" alt="">
        </a>
    </div>
    <div class="btn-container">
        <button class="prev-btn"
            @click="changeSwiper(-1)">&lt;</button>
        <button class="next-btn"
            @click="changeSwiper(1)">&gt;</button>
    </div>
    <div class="pagination-container" style="">
        <span v-for="(index) in imgs"
            :key="index.title"></span>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';

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

const img = ref();
let width = 0
let translateX = ref(0)
let swiperStyle = computed(() => ({
    transform: `translateX(${translateX.value}px)`
}))


/**
 * todo:按到swiper尾端後的處理
 */
let position = 0;
function changeSwiper(n: 1 | -1) {
    if (position == imgs.length) {
        translateX.value = 0;
        return
    } else if (n == 1) {
        translateX.value -= width;
        position += n;
    } else {
        translateX.value += width;
        position -= n;
    }
}

onMounted(() => {
    width = img.value.clientWidth;
})


</script>

<style lang="scss">
@import './assets/basic.scss';

body {
    margin: 0;
    position: relative;
}

.img-container {
    display: flex;
    overflow: hidden;

    a {
        transition: all 0.5s ease-in-out;

        img {
            width: 100vw;
            cursor: default;
        }
    }
}

.btn-container {
    width: 100vw;
    z-index: 2;

    .prev-btn {
        position: absolute;
        top: 50%
    }

    .next-btn {
        position: absolute;
        top: 50%;
        right: 0;
    }
}

.pagination-container {
    position: absolute;
    z-index: 2;
    bottom: 7.5%;
    right: 10%;

    span {
        width: 1rem;
        height: 1rem;
        border: 1px solid black;
        display: inline-block;
        border-radius: 1rem;
        margin-left: 0.5rem;
        cursor: pointer;
    }
}
</style>
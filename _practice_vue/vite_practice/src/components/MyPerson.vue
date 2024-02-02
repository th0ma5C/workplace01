<template>
    <div class="container">
        <button class="prev" @click="prev">&lt;</button>
        <transition-group name="swiper" tag="ul">
            <li v-for="(i) in swiper" :key="i.title"
                class="slide">
                {{ i.title }}
            </li>
        </transition-group>
        <button class="next" @click="next">&gt;</button>

    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const swiper = ref([
    { title: '最新美味上架！立即探索我們最新的素食餐盒和果昔，品嚐獨特的素食美味。' },
    { title: '最新消息、特別優惠、限量商品和精彩活動都在這裡！。' },
    { title: '過敏原報告，查看我們食物過敏警報，確保您點的安心。' },
    { title: 'APP限定好康：下載我們的APP，即刻獲得專屬優惠及最新活動資訊。' },
    { title: '加入會員，享專屬優待！加入我們的會員計畫，即刻享有限定優惠和會員專屬好康。' },
])

function prev() {
    let slide = swiper.value.pop();
    swiper.value.unshift(slide);
}
function next() {
    let slide = swiper.value.shift();
    swiper.value.push(slide);
}

</script>

<style scoped lang="scss">
.container {
    display: flex;
    justify-content: center;
    position: relative;
    overflow: hidden;
    width: 100%;

    button {
        z-index: 2;
    }

    ul {
        margin: 0;
        padding: 0;
        display: flex;
        list-style-type: none;
        text-align: center;
        transform: translateX(-200%);

        li:first-child,
        li:last-child {
            opacity: 0;
        }

        .slide {
            min-width: 100%;
        }
    }

    .swiper-move {
        transition: transform 0.5s ease;
    }
}
</style>
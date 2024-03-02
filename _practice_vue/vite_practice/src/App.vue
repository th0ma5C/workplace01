<template>
    <div class="carousel-container">
        <div class="carousel"
            :style="{ transform: `translateX(-${currentIndex * 100}%)` }">
            <div class="carousel-item"
                v-for="(item, index) in  items "
                :key="index">
                <img :src="item" :alt="item"
                    style="border: 1px solid black;">
            </div>
        </div>
        <div class="controls">
            <button @click="prev">Prev</button>
            <button @click="next">Next</button>
        </div>
        <div class="indicators">
            <span v-for="( item, index ) in  items "
                :key="index" @click="goTo(index)"
                :class="{ active: index === currentIndex }"></span>
        </div>
    </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

const items = ref(["1", "2", "3"]); // 替换为实际图片 URL
const currentIndex = ref(0);
const intervalTime = 3000; // 自动播放间隔时间
let interval;

const next = () => {
    if (currentIndex.value === items.value.length - 1) {
        // 已经是最后一张
        currentIndex.value = 0;
        setTimeout(() => {
            // 等待一段時間後，讓第一張從右邊滑入
            carousel.style.transform = `translateX(-${currentIndex.value * 100}%)`;
        }, 500);
    } else {
        // 不是最后一张
        currentIndex.value = (currentIndex.value + 1) % items.value.length;
    }
};


const prev = () => {
    currentIndex.value = (currentIndex.value - 1 + items.value.length) % items.value.length;
};

const goTo = (index) => {
    currentIndex.value = index;
};

const autoPlay = () => {
    interval = setInterval(next, intervalTime);
};

onMounted(() => {
    autoPlay();
});

onUnmounted(() => {
    clearInterval(interval);
});
</script>

<style>
.carousel-container {
    overflow: hidden;
}

.carousel {
    display: flex;
    transition: transform 0.5s ease-in-out;
}

.carousel-item {
    flex: 0 0 100%;
}

.controls button {
    /* 按钮样式 */
}

.indicators span {
    /* 指示器样式 */
}

.indicators .active {
    /* 激活指示器样式 */
}
</style>

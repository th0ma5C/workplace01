<template>
    <!-- <div class="img-container" ref="img"> -->
    <transition-group tag="div" class="img-container"
        :name="transitionName">
        <a href="" v-for="(imgURL, index) in getImgURL"
            :key="imgURL" @click.prevent :style="imgSwiper"
            class="imgSwiper">
            <img :src="imgURL" alt="">
        </a>
    </transition-group>
    <!-- </div> -->
    <div class="btn-container">
        <button class="prev-btn"
            @click="changeSwiper(-1)">&lt;</button>
        <button class="next-btn"
            @click="changeSwiper(1)">&gt;</button>
    </div>
    <div class="pagination-container" style="">
        <span v-for="(img, index) in imgs" :key="img.title"
            @click="fn(index)"></span>
    </div>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch } from 'vue';

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

let left = ref(0), translateX = ref(0), count = 0
let imgSwiper = computed(() => ({
    transform: `translateX(${translateX.value}%)`
}))

/**
 * todo:前後個各複製一個節點，last切到first的動畫完成後，將動畫取消，跳回第一張。監聽器:transitionend
 */

let transitionName = ref('left-in');
function changeSwiper(n: number) {

    // if (n > 0) {
    //     imgs.push(imgs.shift()!)
    // } else {
    //     imgs.unshift(imgs.pop()!)
    // }

    count += n;
    if (count == imgs.length) {
        count = 0;
        translateX.value = 0;
        return
    } else if (count < 0) {
        count = imgs.length - 1;
        translateX.value = -(imgs.length - 1) * 100;
        return
    }
    translateX.value -= (n * 100);
}
function fn(index: number) {
    if (index == count) return;
    let i = index - count;
    if (i > 0) {
        for (let j = 0; j < i; j++) {
            changeSwiper(1);
        }
    } else {
        for (let j = 0; j > i; j--) {
            changeSwiper(-1);
        }
    }
}
// let timer = setInterval(nextSwiper, 2000);
// watch(show, (nVal, oVal) => {
//     if (nVal < 0) {
//         show.value = imgs.length - 1
//     } else if (nVal > imgs.length - 1) {
//         show.value = 0
//     } else {
//         if (oVal < 0) transitionName.value = 'left-in'
//         else if (oVal > imgs.length - 1) transitionName.value = 'right-in'
//         else transitionName.value = nVal > oVal ? 'right-in' : 'left-in'
//         console.log(transitionName.value);
//     }
//     console.log(show.value, nVal, oVal);
// })



onMounted(() => {
    // timer;
})


</script>

<style lang="scss">
@import './assets/basic.scss';

.imgSwiper {
    will-change: transform;
    transition: all 1s cubic-bezier(0.4, 0, 0.2, 1);
}

// .left-in-move {
//     transition: all 1s;
// }

// .right-in-enter-from {
//     left: 100%
// }

// .right-in-enter-active,
// .right-in-leave-active {
//     transition: left 0.5s;
// }

// .right-in-enter-to,
// .right-in-leave-from {
//     left: 0%
// }

// .right-in-leave-to {
//     left: -100%
// }

// .left-in-enter-from {
//     left: -100%
// }

// .left-in-enter-active,
// .left-in-leave-active {
//     transition: left 0.5s;
// }

// .left-in-enter-to,
// .left-in-leave-from {
//     left: 0%
// }

// .left-in-leave-to {
//     left: 100%
// }

body {
    margin: 0;
    position: relative;
}

.img-container {
    display: flex;
    overflow: hidden;
    height: 100vh;
    position: relative;

    a {

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
<template>
    <div class="container">
        <div class="background1 textClip">TEXT MASK</div>
        <div class="background2">TEXT MASK</div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    position: relative;
    width: 300px;
    height: 100px;
    font-size: 40px;
    font-weight: bold;
    text-align: center;
    line-height: 100px;
}

.background1,
.background2 {
    position: absolute;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.textClip {
    background: url('./assets/shop.jpg') no-repeat center / cover;
    background-clip: text;
    color: transparent;
    z-index: 2;
}

.background2 {
    background: linear-gradient(152deg,
            hsla(72, 67%, 57%, 0.15) 25%, hsla(9, 94%, 45%, 0.15) 80%);
    z-index: 1;
}

// .background2::before {
//     content: 'TEXT MASK';
//     position: absolute;
//     width: 100%;
//     height: 100%;
//     // background: rgba(255, 255, 255, 1);
//     /* opaque white */
//     background-clip: text;
//     color: transparent;
//     display: flex;
//     justify-content: center;
//     align-items: center;
//     mix-blend-mode: screen;
// }</style>
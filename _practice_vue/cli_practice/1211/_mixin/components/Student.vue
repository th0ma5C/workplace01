<template>
    <div class="demo">
        <h2 @click="showName">學生名稱: {{ name }}</h2>
        <h2>學生性別: {{ sex }}</h2>
    </div>
</template>
<script>
// 引入混合
// import { mixin } from '../mixin.js';
export default {
    name: 'my-Student',
    data() {
        return {
            name: '張三',
            sex: '男'
        }
    },
    // mixins: [mixin]
    // methods: {
    //     showName() {
    //         alert(this.name)
    //     }
    // },
}
</script>
<style></style>
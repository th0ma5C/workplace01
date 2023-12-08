<template>
    <!-- 組件結構 -->
    <div class="demo">
        <h2>學校名稱: {{ schoolName }}</h2>
        <h2>學校地址: {{ schoolAddr }}</h2>
        <hr>
        <button @click="showName">提示學校名稱</button>
    </div>
</template>

<script>
// 組件腳本
export default {
    name: 'School',
    data() {
        return {
            schoolName: 'Google',
            schoolAddr: 'Taipei'
        }
    },
    methods: {
        showName() {
            alert(this.schoolName)
        }
    },
}
</script>

<style>
/* 組件樣式 */
.demo {
    background-color: orange;
}
</style>
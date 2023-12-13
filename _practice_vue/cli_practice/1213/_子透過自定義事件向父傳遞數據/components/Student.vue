<template>
    <div class="student">
        <h2>學生名稱: {{ name }}</h2>
        <h2>學生性別: {{ sex }}</h2>
        <button @click="sendStudentName">傳遞學生名</button>
        <!-- <button @click="unbind">解除綁定</button> -->
    </div>
</template>
<script>
export default {
    name: 'my-Student',
    data() {
        return {
            name: '張三',
            sex: '男'
        }
    },
    methods: {
        sendStudentName() {
            // 觸發student組件實例身上的事件
            this.$emit('getStudentName', this.name)
        },
        // vue2 用法
        // unbind() {
        //     this.$off('getStudentName')
        // }
    },
}
</script>
<style>
.student {
    background-color: lightsalmon;
    padding: 5px;
}
</style>
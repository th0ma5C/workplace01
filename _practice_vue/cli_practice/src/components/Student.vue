<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2>學生名稱: {{ name }}</h2>
        <h2>學生年齡: {{ age }}</h2>
        <h2>學生性別: {{ sex }}</h2>
    </div>
</template>
<script>
export default {
    name: 'my-Student',
    data() {
        return {
            msg: '我是一位學生',
            name: '張三',
            age: 18,
            sex: '男'
        }
    },
}
</script>
<style>
.demo {
    background-color: gray;
}
</style>
<template>
    <div class="demo">
        <h1>{{ msg }}</h1>
        <h2>學生名稱: {{ name }}</h2>
        <h2>學生年齡: {{ student_age + 1 }}</h2>
        <h2>學生性別: {{ sex }}</h2>
        <button @click="change">修改收到的年齡</button>
    </div>
</template>
<script>
export default {
    name: 'my-Student',
    data() {
        return {
            msg: '我是一位學生',
            student_age: this.age
        }
    },
    methods: {
        change() {
            this.student_age++
        }
    },
    // 簡單接收
    // props: ['name', 'sex', 'age'],

    // 接收時對數據類型進行限制
    // props: {
    //     name: String,
    //     sex: String,
    //     age: Number
    // },

    // 接收時對數據類型、預設值、必要性進行限制
    props: {
        name: {
            type: String, //類型
            required: true, //必填
        },
        age: {
            type: Number,
            default: 99
        },
        sex: {
            type: String,
            required: true
        },
    }
}
</script>
<style></style>
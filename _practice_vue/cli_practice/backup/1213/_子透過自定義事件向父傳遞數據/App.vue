<template>
    <div class="app">
        <h1>{{ msg }}{{ studentName }}</h1>
        <!-- 透過父給子函數類型props，子回傳數據給父組件 -->
        <School :getSchoolName="getSchoolName"></School>
        <hr>
        <!-- 透過父給子綁定自定義事件，子回傳數據給父組件 -->
        <!-- 使用v-on -->
        <Student @getStudentName="getStudentName"
            @click="show" />

        <!-- vue3已移除 -->
        <!-- 使用refs -->
        <!-- <Student ref="student" /> -->
    </div>
</template>
<script>
import Student from './components/Student.vue';
import School from './components/School.vue';
export default {
    name: 'App',
    components: { Student, School },
    data() {
        return {
            msg: '歡迎光臨',
            studentName: ''
        }
    },
    methods: {
        getSchoolName(name) {
            console.log("收到學校名", name)
        },
        getStudentName(name) {
            console.log("收到學生名", name);
            this.studentName = name;
        },
        show() {
            alert('123')
        },
    },
    // vue2用法
    // mounted() {
    //     this.$refs.student.$on('getStudentName', this.getStudentName);
    // },
}
</script>
<style>
.app {
    background-color: lightblue;
    padding: 5px;
}
</style>
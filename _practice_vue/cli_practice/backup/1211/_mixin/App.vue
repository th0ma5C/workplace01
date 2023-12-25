<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <School></School>
        <hr>
        <Student ref="sch" />
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
            msg: '歡迎光臨'
        }
    },
    methods: {
        showDOM() {
            console.log(this.$refs)
        }
    },
}
</script>
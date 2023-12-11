<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <Student ref="sch" name="李四" sex="男" :age="18" />
    </div>
</template>
<script>
import Student from './components/Student.vue';
export default {
    name: 'App',
    components: { Student },
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
<template>
    <div>
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDOM">點我提示DOM元素</button>
        <School ref="sch" />
    </div>
</template>
<script>
import School from './components/School.vue';
export default {
    name: 'App',
    components: { School },
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
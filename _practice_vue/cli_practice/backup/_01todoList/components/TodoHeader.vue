<template>
    <div class="todoHeader">
        <input type="text" placeholder="Enter新增代辦事項"
            @keyup.enter="add" v-model.trim="title"
            name="newTodo">
    </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
    name: 'TodoHeader',
    // props: ['addTodo'],
    emits: ['addTodo'],
    data() {
        return {
            title: ''
        }
    },
    methods: {
        // 直接操作DOM實現
        /*add(e) {
            const todoObj = { id: nanoid(), title: e.target.value, done: false }
            this.addTodo(todoObj);
            e.target.value = '';
        },*/

        // props實現
        /*add() {
            if (!this.title) return alert('您沒有輸入東西');
            const todoObj = { id: nanoid(), title: this.title, done: false }
            this.addTodo(todoObj);
            this.title = '';
        },*/

        // $emit實現
        add() {
            // 校驗數據
            if (!this.title) return alert('您沒有輸入東西');
            // 新增todo物件
            const todoObj = { id: nanoid(), title: this.title, done: false }
            // 另App組件添加物件
            this.$emit('addTodo', todoObj);
            // 清空input
            this.title = '';
        }
    },
}
</script>

<style scoped></style>
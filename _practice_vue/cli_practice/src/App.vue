<template>
    <div>
        <div class="todoContainer">
            <div class="todoWrap">
                <TodoHeader :addTodo="addTodo"></TodoHeader>
                <TodoList :todos="todos"></TodoList>
                <TodoFooter></TodoFooter>
            </div>
        </div>
    </div>
</template>

<script>
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';
import TodoFooter from './components/TodoFooter.vue';

export default {
    components: { TodoHeader, TodoList, TodoFooter },
    data() {
        return {
            todos: [
                { id: '001', title: '吃飯', done: true },
                { id: '002', title: '睡覺', done: false },
                { id: '003', title: '打代碼', done: true },
            ]
        }
    },
    methods: {
        addTodo(todoObj) {
            this.todos.unshift(todoObj)
        }
    },
}
</script>

<style>
ul {
    list-style-type: none;
}
</style>
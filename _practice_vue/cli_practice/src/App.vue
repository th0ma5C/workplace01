<template>
    <div>
        <div class="todoContainer">
            <div class="todoWrap">
                <TodoHeader :addTodo="addTodo"></TodoHeader>
                <TodoList :todos="todos" :checkTodo="checkTodo"
                    :deleteTodo="deleteTodo">
                </TodoList>
                <TodoFooter :todos="todos"
                    :checkAllTodo="checkAllTodo"
                    :clearAllTodo="clearAllTodo"></TodoFooter>
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
        // 添加todo
        addTodo(todoObj) {
            this.todos.unshift(todoObj)
        },
        // todo勾選
        checkTodo(id) {
            this.todos.forEach((todo) => {
                if (todo.id == id) todo.done = !todo.done;
            })
        },
        // 刪除todo
        deleteTodo(id) {
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        // 全選框
        checkAllTodo(done) {
            this.todos.forEach((todo) => {
                todo.done = done;
            })
        },
        // 清除已完成
        clearAllTodo() {
            this.todos = this.todos.filter((todo) => {
                return !todo.done;
            })
        }
    },
}
</script>

<style>
* {
    box-sizing: border-box;
}

*::before,
*::after {
    box-sizing: inherit;
}

ul {
    list-style-type: none;
}
</style>
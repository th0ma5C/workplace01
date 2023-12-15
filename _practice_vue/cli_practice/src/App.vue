<template>
    <div>
        <div class="todoContainer">
            <div class="todoWrap">
                <TodoHeader @addTodo="addTodo"></TodoHeader>
                <!-- <TodoList :todos="todos" :checkTodo="checkTodo"
                    :deleteTodo="deleteTodo"> -->
                <!-- 用事件總線mitt實現 -->
                <TodoList :todos="todos">
                </TodoList>
                <TodoFooter :todos="todos"
                    @checkAllTodo="checkAllTodo"
                    @clearAllTodo="clearAllTodo"></TodoFooter>
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
            todos: JSON.parse(localStorage.getItem('todos')) || [],
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
    watch: {
        todos: {
            deep: true,
            handler(value) {
                console.log(JSON.stringify(value))
                localStorage.setItem('todos', JSON.stringify(value))
            }
        },
        // todos(value) {
        //     localStorage.setItem('todos', JSON.stringify(value))
        // }
    },
    // 事件總線
    mounted() {
        this.$mitt.on('checkTodo', this.checkTodo);
        this.$mitt.on('deleteTodo', this.deleteTodo);
    },
    beforeUnmount() {
        this.$mitt.off('checkTodo');
        this.$mitt.off('deleteTodo');
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
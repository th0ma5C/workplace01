<template>
    <div>
        <div class="todoContainer">
            <div class="todoWrap">
                <!-- 自定義事件實現 -->
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
        deleteTodo(_, id) { //pubsub接收兩個參數，故用'_'接收但沒有使用
            this.todos = this.todos.filter(todo => todo.id !== id)
        },
        // 更新todo
        updateTodo(id, title) {
            this.todos.forEach((todo) => {
                if (todo.id == id) todo.title = title;
            })
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
        },
    },
    watch: {
        todos: {
            deep: true,
            handler(value) {
                // console.log(JSON.stringify(value))
                localStorage.setItem('todos', JSON.stringify(value))
            }
        },
        // todos(value) {
        //     localStorage.setItem('todos', JSON.stringify(value))
        // }
    },
    // 事件總線
    mounted() {
        // mitt實現
        this.$mitt.on('checkTodo', this.checkTodo);
        this.$mitt.on('updateTodo', ({ id, value }) => {
            this.updateTodo(id, value);
        });
        // this.$mitt.on('deleteTodo', this.deleteTodo);
        // pubsub訂閱消息
        this.pubId = this.PubSub.subscribe('deleteTodo', this.deleteTodo)
    },
    beforeUnmount() {
        this.$mitt.off('checkTodo');
        this.$mitt.off('updateTodo');
        // this.$mitt.off('deleteTodo');

        this.PubSub.unsubscribe(this.pubId);
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
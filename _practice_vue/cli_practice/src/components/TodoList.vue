<template>
    <div>
        <ul class="todoList">
            <transition-group appear name="todo">
                <TodoItem v-for="todoObj in todos"
                    :key="todoObj.id" :todo="todoObj">
                </TodoItem>
            </transition-group>
        </ul>
    </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
    name: 'TodoList',
    components: { TodoItem },
    props: ["todos"]
}
</script>

<style scoped>
/* .todo-enter-active,
.todo-leave-active {
    transition: all 0.3s linear
}

.todo-enter-from,
.todo-leave-to {
    transform: translateX(100%);
}

.todo-enter-to,
.todo-leave-from {
    transform: translateX(0);
} */
@keyframes todo {
    from {
        transform: translateX(100%);
    }

    to {
        transform: translateX(0);
    }
}

.todo-enter-active {
    animation: todo 0.3s linear;
}

.todo-leave-active {
    animation: todo 0.3s linear reverse;
}
</style>
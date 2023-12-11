<template>
    <div>
        <ul class="todoList">
            <TodoItem v-for="todoObj in todos" :key="todoObj.id" :todo="todoObj"></TodoItem>
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

<style scoped></style>
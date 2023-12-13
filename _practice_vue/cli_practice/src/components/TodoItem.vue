<template>
    <div>
        <li>
            <label for="list">
                <input type="checkbox" :checked="todo.done"
                    @change="handleCheck(todo.id)" name="list">
                <!-- 下為用v-model實現不太推薦，因為直接修改props -->
                <!-- <input type="checkbox" v-model="todo.done"> -->
                <span>{{ todo.title }}</span>
            </label>
            <button class="del-btn"
                @click="handleDelete(todo.id)">刪除</button>
        </li>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    // 接收todo物件
    props: ['todo'],
    methods: {
        // 勾選
        handleCheck(id) {
            // 通知App組件將對應todo物件的done值取反
            // this.checkTodo(id);
            // mitt實現
            this.$mitt.emit('checkTodo', id);
        },
        // 刪除
        handleDelete(id) {
            if (confirm('確認刪除嗎?')) {
                // this.deleteTodo(id)
                // mitt實現
                this.$mitt.emit('deleteTodo', id);
            }
        },
    },
}
</script>

<style scoped>
li {

    button {
        display: none;
    }

    &:hover {
        background-color: #ddd;

        button {
            display: inline-block;
        }
    }

}
</style>
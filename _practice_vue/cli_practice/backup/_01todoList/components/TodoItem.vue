<template>
    <div>
        <li>
            <label for="list">
                <input type="checkbox" :checked="todo.done"
                    @change="handleCheck(todo.id)" name="list">
                <!-- 下為用v-model實現不太推薦，因為直接修改props -->
                <!-- <input type="checkbox" v-model="todo.done"> -->
                <span v-show="!todo.isEdit">{{ todo.title
                }}</span>
                <input type="text" :value="todo.title"
                    v-show="todo.isEdit"
                    @blur="handleBlur(todo, $event)"
                    ref="inputTitle">
            </label>
            <button class="del-btn" @click="handleEdit(todo)"
                v-show="!todo.isEdit">編輯</button>
            <button class=" del-btn"
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
                // props傳遞實現
                // this.deleteTodo(id)
                // mitt實現
                // this.$mitt.emit('deleteTodo', id);
                // pubsub實現
                this.PubSub.publish('deleteTodo', id)
            }
        },
        // 編輯
        handleEdit(todo) {
            todo.isEdit = true;
            // console.log('isEdit' in todo);
            // 下一次渲染DOM時再執行獲取焦點
            // setTimeout(() => {
            //     this.$refs.inputTitle.focus();
            // }, 1);
            // API實現
            this.$nextTick(() => {
                this.$refs.inputTitle.focus();
            })
        },
        // 失去焦點回調，並執行修改
        handleBlur(todo, e) {
            todo.isEdit = false;
            if (!e.target.value.trim()) return alert('不能為空白');
            this.$mitt.emit('updateTodo', { id: todo.id, value: e.target.value })
        }
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
<template>
    <div v-show="total">
        <label for="listFooter">
            <!-- <input type="checkbox" :checked="isAll"
                @change="checkAll">全選 -->
            <input type="checkbox" v-model="isAll"
                name="listFooter">全選
        </label>
        <span>
            <span>已完成:{{ todoTotal }}</span>/全部:{{ total }}
        </span>
        <br>
        <button @click="clearAllDone">清除已完成</button>
    </div>
</template>

<script>
export default {
    name: 'TodoFooter',
    // props實現
    // props: ['todos','checkAllTodo', 'clearAllTodo'],
    props: ['todos'],
    // 自定義事件實現
    emits: ['checkAllTodo', 'clearAllTodo'],
    computed: {
        total() {
            return this.todos.length;
        },
        // todoTotal() {
        //     let i = 0;
        //     this.todos.forEach((todo) => {
        //         if (todo.done) i++;
        //     })
        //     return i;
        // },
        todoTotal() {
            // const x = this.todos.reduce((pre,current)=>{
            //     return pre + (current.done ? 1 :0)
            // },0)
            return this.todos.reduce((pre, todo) => pre + (todo.done ? 1 : 0), 0);
        },
        isAll: {
            get() {
                return this.todoTotal == this.total && this.total > 0;
            },
            set(value) {
                // this.checkAllTodo(value);
                this.$emit('checkAllTodo', value);
            }
        }
    },
    methods: {
        // checkAll(e) {
        //     this.checkAllTodo(e.target.checked);
        // },
        clearAllDone() {
            // this.clearAllTodo()
            this.$emit('clearAllTodo')
        }

    },
}
</script>

<style scoped></style>
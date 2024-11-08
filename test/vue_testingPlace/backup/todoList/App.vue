<script setup lang="ts">
import { ref, computed } from 'vue'

interface Todo {
    id: number
    text: string
    completed: boolean
    isEditing: boolean
}

// 待辦事項列表
const todos = ref<Todo[]>([])
// 新增待辦的輸入框
const newTodo = ref('')
// 搜尋關鍵字
const searchText = ref('')

// 篩選後的待辦事項
const filteredTodos = computed(() => {
    return todos.value.filter(todo =>
        todo.text.toLowerCase().includes(searchText.value.toLowerCase())
    )
})

// 新增待辦
const addTodo = () => {
    const text = newTodo.value.trim()
    if (!text) return

    todos.value.push({
        id: Date.now(),
        text,
        completed: false,
        isEditing: false
    })

    newTodo.value = ''
}

// 刪除待辦
const removeTodo = (todo: Todo) => {
    todos.value = todos.value.filter(t => t.id !== todo.id)
}

// 開始編輯
const startEdit = (todo: Todo) => {
    todo.isEditing = true
}

// 完成編輯
const finishEdit = (todo: Todo, event: Event) => {
    const input = event.target as HTMLInputElement
    const text = input.value.trim()

    if (text) {
        todo.text = text
    } else {
        removeTodo(todo)
    }

    todo.isEditing = false
}

// 取消編輯
const cancelEdit = (todo: Todo) => {
    todo.isEditing = false
}

// 切換完成狀態
const toggleComplete = (todo: Todo) => {
    todo.completed = !todo.completed
}
</script>

<template>
    <div class="max-w-xl mx-auto p-4">
        <h1 class="text-2xl font-bold mb-4">Todo List</h1>

        <!-- 新增待辦 -->
        <div class="flex gap-2 mb-4">
            <input v-model="newTodo" @keyup.enter="addTodo"
                placeholder="新增待辦事項..."
                class="flex-1 px-3 py-2 border rounded">
            <button @click="addTodo"
                class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                新增
            </button>
        </div>

        <!-- 搜尋 -->
        <input v-model="searchText" placeholder="搜尋待辦事項..."
            class="w-full px-3 py-2 border rounded mb-4">

        <!-- 待辦列表 -->
        <ul class="space-y-2">
            <li v-for="todo in filteredTodos" :key="todo.id"
                class="flex items-center gap-2 p-2 border rounded"
                :class="{ 'bg-gray-50': todo.completed }">
                <!-- 完成狀態 -->
                <input type="checkbox"
                    :checked="todo.completed"
                    @change="toggleComplete(todo)"
                    class="w-4 h-4">

                <!-- 待辦內容 -->
                <template v-if="!todo.isEditing">
                    <span
                        :class="{ 'line-through text-gray-400': todo.completed }"
                        class="flex-1">
                        {{ todo.text }}
                    </span>
                    <button @click="startEdit(todo)"
                        class="px-2 py-1 text-gray-600 hover:text-gray-800">
                        編輯
                    </button>
                </template>

                <!-- 編輯模式 -->
                <template v-else>
                    <input :value="todo.text"
                        @blur="finishEdit(todo, $event)"
                        @keyup.enter="finishEdit(todo, $event)"
                        @keyup.esc="cancelEdit(todo)"
                        class="flex-1 px-2 py-1 border rounded"
                        v-focus>
                </template>

                <!-- 刪除按鈕 -->
                <button @click="removeTodo(todo)"
                    class="px-2 py-1 text-red-600 hover:text-red-800">
                    刪除
                </button>
            </li>
        </ul>

        <!-- 空狀態 -->
        <div v-if="filteredTodos.length === 0"
            class="text-center text-gray-500 py-4">
            {{ todos.length === 0 ? '沒有待辦事項' : '沒有符合搜尋的待辦事項'
            }}
        </div>
    </div>
</template>

<script lang="ts">
// 自動聚焦指令
const vFocus = {
    mounted: (el: HTMLElement) => el.focus()
}
</script>

<style scoped>
/* 可以添加需要的樣式 */
</style>
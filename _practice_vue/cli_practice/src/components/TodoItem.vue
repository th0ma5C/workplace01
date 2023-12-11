<template>
    <div>
        <li>
            <label for="">
                <input type="checkbox" :checked="todo.done">
                <span>{{ todo.title }}</span>
            </label>
            <button class="del-btn" style="display: none;">刪除</button>
        </li>
    </div>
</template>

<script>
export default {
    name: 'TodoItem',
    // 接收todo物件
    props: ['todo'],
}
</script>

<style scoped></style>
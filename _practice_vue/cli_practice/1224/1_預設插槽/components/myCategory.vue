<template>
    <div class="category">
        <h3>{{ title }}分類</h3>
        <!-- 默認插槽 -->
        <slot></slot>
        <!-- 具名插槽 -->
        <!-- 作用域插槽 -->
    </div>
</template>

<script>
export default {
    name: 'myCategory',
    props: ['title']
}
</script>

<style scoped>
.category {
    background-color: aqua;
    width: 200px;
    height: 300px;
}

h3 {
    text-align: center;
    background-color: orange;
}
</style>
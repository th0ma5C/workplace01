<template>
    <div class="category">
        <h3>{{ title }}分類</h3>
        <!-- 作用域插槽 -->
        <slot :games="games" :msg="msg"></slot>
        <!-- 具名作用域 -->
        <slot name="center" :games="games"></slot>
    </div>
</template>

<script>
export default {
    name: 'myCategory',
    props: ['title'],
    data() {
        return {
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            msg: 'hello',
        }
    },
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
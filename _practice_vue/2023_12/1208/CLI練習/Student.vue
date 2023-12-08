<template>
    <!-- 組件結構 -->
    <div>
        <h2>學生姓名: {{ studentName }}</h2>
        <h2>學生年齡: {{ studentAge }}</h2>
    </div>
</template>

<script>
// 組件腳本
export default {
    data() {
        return {
            studentName: '張三',
            studentAge: 18
        }
    },
}
</script>


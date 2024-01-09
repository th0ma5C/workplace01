<template>
    <div>
        <ul>
            <!-- query -->
            <!-- <li>消息編號:{{ $route.query.id }}</li>
            <li>消息標題:{{ $route.query.title }}</li> -->

            <!-- params -->
            <!-- <li>消息編號:{{ $route.params.id }}</li>
            <li>消息標題:{{ $route.params.title }}</li> -->

            <!-- 路由props -->
            <li>消息編號:{{ id }}</li>
            <li>消息標題:{{ title }}</li>

        </ul>
    </div>
</template>

<script>
export default {
    name: 'msgDetail',
    props:
        // ['a','b'],
        ['id', 'title'],
}
</script>

<style scoped></style>
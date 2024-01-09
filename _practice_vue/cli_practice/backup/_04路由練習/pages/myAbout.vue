<template>
    <div>
        <h2>我是About的内容</h2>
    </div>
</template>

<script>
export default {
    name: 'myAbout',
    // 組件路由守衛，通過路由規則進入組件時被調用
    beforeRouteEnter(to, from, next) {
        if (to.meta.isAuth) {
            if (localStorage.getItem('school') === 'google') {
                next();
            } else {
                alert('無權限');
            }
        } else {
            next()
        }
    },
    // 透過路由規則離開組件時被調用
    // beforeRouteLeave(to, from, next) {
    // }
}
</script>

<style scoped></style>
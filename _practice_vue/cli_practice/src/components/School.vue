<template>
    <div class="demo">
        <h2>學校名稱: {{ name }}</h2>
        <h2>學校地址: {{ addr }}</h2>
    </div>
</template>
<script>
export default {
    name: 'my-School',
    data() {
        return {
            name: 'Google',
            addr: 'Taipei'
        }
    },
}
</script>
<style>
.demo {
    background-color: gray;
}
</style>
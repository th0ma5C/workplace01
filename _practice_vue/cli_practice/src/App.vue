<template>
    <div>
        <myCount></myCount>
    </div>
</template>

<script>
import myCount from './components/myCount.vue';
export default {
    name: 'App',
    components: { myCount },
}
</script>

<style>
.container,
.foot {
    display: flex;
    justify-content: space-around;
}

img {
    width: 100%;
}
</style>
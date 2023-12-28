<template>
    <div>
        <myCount></myCount>
        <hr>
        <myPerson></myPerson>
    </div>
</template>

<script>
import myCount from './components/myCount.vue';
import myPerson from './components/myPerson.vue';
export default {
    name: 'App',
    components: { myCount, myPerson },
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
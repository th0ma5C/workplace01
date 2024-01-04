<template>
    <div>
        <h2>姓名{{ person.name }}年齡{{ person.age }}</h2>
        <button @click="person.name += '~'">+~</button><br>
        <button @click="person.age += 1">+1</button>
    </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue';

let person = ref({
    name: '張三',
    age: 18
});
console.log(person);
</script>

<style scoped></style>
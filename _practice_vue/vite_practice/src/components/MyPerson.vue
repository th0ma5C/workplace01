<template>
    <div>
        <h2>當前和為{{ sum }}</h2>
        <button @click="changeSum" ref="title">+1</button>
    </div>
</template>

<script lang="ts" setup>
import { ref, watch } from 'vue';

let sum = ref(0);
let title = ref()
function changeSum() {
    sum.value += 1;
    console.log(title.value);
}

let stopWatch = watch(sum, (newval, oldval) => {
    console.log('SUM變化了', newval, oldval);
    if (newval > 10) { stopWatch() };
})

</script>

<style scoped></style>
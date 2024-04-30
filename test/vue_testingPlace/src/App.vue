<template>
    <div :style="test">
        abcde
    </div>
    <div v-if="i" @click="change">
        123456
    </div>
    <div v-else @click="change">
        7891011
    </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';
let i = ref(true);
let j = ref(1)
function change() {
    i.value = !i.value
    j.value++;
}
let test = computed(() => ({
    'font-size': `${j.value}rem`
}))

</script>

<style scoped lang="scss">
$size: 1rem;

div {
    font-size: var(--num, 1rem);
}
</style>
<template>
    <div>
        11111111111
        <span v-show="foo">22222222222</span>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const foo = ref(false)

</script>

<style scoped></style>
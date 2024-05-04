<template>
    <div>
        <button>測試</button>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
@keyframes test {
    from {
        pointer-events: none;
    }

    to {
        pointer-events: auto;
    }
}

button {
    animation: test 0.5s ease;
    transition: all 0.5s;
}

button:hover {
    transform: scale(1.5);
}
</style>
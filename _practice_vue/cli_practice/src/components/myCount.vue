<template>
    <div>
        <h1>當前和為:{{ $store.state.sum }}</h1>
        <h3>當前合的10倍為{{ $store.getters.bigSum }}</h3>
        <h3>我在{{ $store.state.addr }}的{{ $store.state.school }}</h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment">+</button>
        <button @click="decrement">-</button>
        <button @click="incrementOdd">和為奇數時才+</button>
        <button @click="incrementWait">等會兒才+</button>
    </div>
</template>

<script>
export default {
    name: 'myCount',
    data() {
        return {
            n: 1
        }
    },
    methods: {
        increment() {
            this.$store.commit('ADD', this.n);
        },
        decrement() {
            this.$store.commit('MINUS', this.n);
        },
        incrementOdd() {
            this.$store.dispatch('addOdd', this.n);
        },
        incrementWait() {
            this.$store.dispatch('addWait', this.n);
        },
    },
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
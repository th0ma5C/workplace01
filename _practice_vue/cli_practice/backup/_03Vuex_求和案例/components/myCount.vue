<template>
    <div>
        <h1>當前和為:{{ sum }}</h1>
        <h3>當前合的10倍為{{ bigSum }}</h3>
        <h3>我在{{ addr }}的{{ school }}
        </h3>
        <h3 style="color: red;">person組件總人數為:{{
            personList.length }}
        </h3>
        <select v-model.number="n">
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
        </select>
        <button @click="increment(n)">+</button>
        <button @click="decrement(n)">-</button>
        <button @click="incrementOdd(n)">和為奇數時才+</button>
        <button @click="incrementWait(n)">等會兒才+</button>
    </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex';
export default {
    name: 'myCount',
    data() {
        return {
            n: 1
        }
    },
    computed: {
        /*// 親自寫計算屬性
        sum(){
            return this.$store.state.sum
        },
        addr(){
            return this.$store.state.addr
        },
        school(){
            return this.$store.state.school
        },*/
        // 借助mapState、mapGetters生成的計算屬性，從state中讀取數據
        // 物件寫法
        // ...mapState({ sum: 'sum', addr: 'addr', school: 'school' }),
        // ...mapGetters({ bigSum: 'bigSum' }),
        // 陣列寫法-->組件中使用名稱與state相同時可使用
        ...mapState('countOptions', ['sum', 'addr', 'school', 'personList']),
        ...mapState('personOptions', ['personList']),
        ...mapGetters('countOptions', ['bigSum']),
    },
    methods: {
        /* //親自寫methods
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
        }, */
        // 借助mapMutations、mapActions生成對應方法
        // 物件寫法
        ...mapMutations('countOptions', { increment: 'ADD', decrement: 'MINUS' }),
        // 陣列寫法
        // ...mapMutations(['ADD', 'MINUS']),

        // 物件寫法
        ...mapActions('countOptions', { incrementOdd: 'addOdd', incrementWait: 'addWait' }),
        // 陣列寫法
        // ...mapActions(['addOdd', 'addWait']),

    },
}
</script>

<style scoped>
button {
    margin-left: 5px;
}
</style>
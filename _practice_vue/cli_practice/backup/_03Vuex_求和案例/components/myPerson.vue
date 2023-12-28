<template>
    <div>
        <h1>人員列表</h1>
        <h3 style="color: red;">count組件和為:{{ sum }}</h3>
        <h3>列表中第一位是:{{ firstPersonName }}</h3>
        <input type="text" placeholder="請輸入姓名" v-model="name">
        <button @click="add">添加</button>
        <button @click="addWang">添加一個姓王的人</button>
        <button @click="addPersonServer">添加隨機</button>
        <ul>
            <li v-for="p in personList" :key="p.id">{{ p.name }}
            </li>
        </ul>
    </div>
</template>

<script>
import { nanoid } from 'nanoid';
export default {
    name: 'myPerson',
    data() {
        return {
            name: '',
        }
    },
    computed: {
        personList() {
            return this.$store.state.personOptions.personList
        },
        sum() {
            return this.$store.state.countOptions.sum
        },
        firstPersonName() {
            return this.$store.getters['personOptions/firstPersonName']
        }
    },
    methods: {
        add() {
            const personObj = { id: nanoid(), name: this.name };
            this.name = '';
            this.$store.commit('personOptions/ADD_PERSON', personObj);
        },
        addWang() {
            const personObj = { id: nanoid(), name: this.name };
            this.name = '';
            this.$store.dispatch('personOptions/addPersonWang', personObj);
        },
        addPersonServer() {
            this.$store.dispatch('personOptions/addPersonServer');
        }
    },
}
</script>

<style scoped></style>
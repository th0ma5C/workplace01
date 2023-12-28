<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <router-link to="/myHome/homeMsg/msgDetail">
                    {{ m.title }}</router-link>&nbsp;&nbsp;
            </li>
        </ul>
        <hr>
        <router-view></router-view>
    </div>
</template>

<script>
export default {
    name: 'homeMsg',
    data() {
        return {
            msgList: [
                { id: '001', title: '消息01' },
                { id: '002', title: '消息02' },
                { id: '003', title: '消息03' },
            ]
        }
    },
}
</script>

<style scoped></style>
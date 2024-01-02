<template>
    <div>
        <ul>
            <li v-for="m in msgList" :key="m.id">
                <!-- 跳轉路由並攜帶query參數，使用to字符串寫法 -->
                <!-- <router-link
                    :to='`/myHome/homeMsg/msgDetail?id=${m.id}&title=${m.title}`'>
                    {{ m.title }}</router-link>&nbsp;&nbsp; -->

                <!-- 跳轉路由並攜帶query參數，使用to物件寫法 -->
                <router-link :to="{
                    // path: '/myHome/homeMsg/msgDetail',
                    name: 'msg',
                    query: {
                        id: m.id,
                        title: m.title
                    }
                }">
                    {{ m.title }}
                </router-link>&nbsp;&nbsp;
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
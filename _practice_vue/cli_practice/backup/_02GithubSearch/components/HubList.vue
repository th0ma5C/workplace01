<template>
    <div class="row">
        <!-- 展示用戶列表 -->
        <div class="card" v-show="info.users.length"
            v-for="(user) in info.users" :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url"
                    style='width: 100px' />
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
        <!-- 歡迎詞 -->
        <h1 v-show="info.isFirst">歡迎！</h1>
        <!-- 讀取中 -->
        <h1 v-show="info.isLoading">讀取中...</h1>
        <!-- 錯誤訊息 -->
        <h1 v-show="info.errMsg">{{ info.errMsg }}</h1>
    </div>
</template>

<script>
export default {
    name: 'HubList',
    data() {
        return {
            info: {
                isFirst: true,
                isLoading: false,
                errMsg: '',
                users: [],
            }
        }
    },
    mounted() {
        this.$mitt.on('updateListData', (dataObj) => {
            // this.isFirst = isFirst;
            // this.isLoading = isLoading;
            // this.errMsg = errMsg;
            // this.users = users;
            // this.info = dataObj;
            // 使用展開運算符，讓isFirst不因頁面刷新而丟失，且傳參不需按照順序
            this.info = { ...this.info, ...dataObj }
            console.log(this)
        })
    },
}
</script>

<style scoped>
.row {
    display: flex;
    flex-wrap: wrap;
}
</style>
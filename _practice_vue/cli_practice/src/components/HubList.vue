<template>
    <div class="row">
        <!-- 展示用戶列表 -->
        <div class="card" v-for="(user) in users"
            :key="user.login">
            <a :href="user.html_url" target="_blank">
                <img :src="user.avatar_url"
                    style='width: 100px' />
            </a>
            <p class="card-text">{{ user.login }}</p>
        </div>
    </div>
</template>

<script>
export default {
    name: 'HubList',
    data() {
        return {
            isFirst: true,
            isLoading: false,
            errMsg: '',
            users: [],
        }
    },
    mounted() {
        this.$mitt.on('getUsers', (users) => {
            this.users = users;
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
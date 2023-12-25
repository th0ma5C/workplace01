<template>
    <section class="jumbotron">
        <h3 class="jumbotron-heading">Search Github
            Users</h3>
        <div>
            <input type="text"
                placeholder="enter the name you search"
                v-model="keyWord" />&nbsp;
            <button @click="searchUser">Search</button>
        </div>
    </section>
</template>

<script>
export default {
    name: 'HubSearch',
    data() {
        return {
            keyWord: '',
        }
    },
    methods: {
        searchUser() {
            // 請求前更新List數據
            this.$mitt.emit('updateListData', { isFirst: false, isLoading: true, errMsg: '', users: [] });
            this.axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
                .then((result) => {
                    console.log('請求成功');
                    // 請求成功後更新List
                    this.$mitt.emit('updateListData', { isLoading: false, errMsg: '', users: result.data.items });
                }).catch((err) => {
                    console.log('失敗', err.message);
                    // 請求失敗後更新List
                    this.$mitt.emit('updateListData', { isLoading: false, errMsg: err.message, users: [] });
                });
        },
    },
}
</script>

<style scoped></style>
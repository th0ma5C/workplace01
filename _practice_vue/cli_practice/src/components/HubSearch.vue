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
            this.axios.get(`https://api.github.com/search/users?q=${this.keyWord}`)
                .then((result) => {
                    console.log('請求成功');
                    this.$mitt.emit('getUsers', result.data.items);
                }).catch((err) => {
                    console.log('失敗', err.message);
                });
        },
    },
}
</script>

<style scoped></style>
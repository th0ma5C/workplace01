<template>
    <div class="school">
        <h2 @click="showName">學校名稱: {{ name }}</h2>
        <h2>學校地址: {{ addr }}</h2>
        <button @click="sendSchoolName">傳遞學校名</button>
    </div>
</template>
<script>
export default {
    name: 'my-School',
    props:['getSchoolName'],
    data() {
        return {
            name: 'Google',
            addr: '台北'
        }
    },
    methods:{
        sendSchoolName(){
            this.getSchoolName(this.name);
        }
    }
}
</script>
<style>
.school {
    background-color: aquamarine;
    padding: 5px;
}
</style>
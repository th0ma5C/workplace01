<template>
    <div class="demo">
        <h2 @click="showName">學校名稱: {{ name }}</h2>
        <h2>學校地址: {{ addr }}</h2>
    </div>
</template>
<script>
// import { mixin } from '../mixin'
export default {
    name: 'my-School',
    data() {
        return {
            name: 'Google',
            addr: '台北'
        }
    },
    // mixins: [mixin]
    // methods: {
    //     showName() {
    //         alert(this.name)
    //     }
    // },
}
</script>
<style></style>
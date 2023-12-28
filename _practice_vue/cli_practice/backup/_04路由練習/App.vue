<template>
    <div>
        <div class="row">
            <myBanner></myBanner>
        </div>
        <div class="row">
            <div class="col-xs-2 col-xs-offset-2">
                <div class="list-group">
                    <!-- 原生跳轉 -->
                    <!-- <a class="list-group-item"
                        href="./about.html">About</a>
                    <a class="list-group-item active"
                        href="./home.html">Home</a> -->

                    <!-- 路由跳轉 -->
                    <router-link class="list-group-item"
                        active-class="active" to="/myAbout">
                        About</router-link>
                    <router-link class="list-group-item"
                        active-class="active" to="/myHome">
                        Home
                    </router-link>
                </div>
            </div>
            <div class="col-xs-6">
                <div class="panel">
                    <div class="panel-body">
                        <!-- 指定組件呈現位置 -->
                        <router-view></router-view>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import myBanner from './components/myBanner.vue';
export default {
    name: 'App',
    components: {
        myBanner,
    },
}
</script>

<style>
body {
    padding: 10px;
}

img {
    width: 100%;
}
</style>
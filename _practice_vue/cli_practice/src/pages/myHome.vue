<template>
    <div>
        <h2>我是Home的内容</h2>
        <div>
            <h4>Home组件内容</h4>
            <div>
                <ul class="nav nav-tabs">
                    <li>
                        <router-link to='/myHome/homeNews'
                            class="list-group-item"
                            active-class="active">News</router-link>
                    </li>
                    <li>
                        <router-link to='/myHome/homeMsg'
                            class="list-group-item"
                            active-class="active">Message</router-link>
                    </li>
                </ul>
                <div>
                    <router-view></router-view>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'myHome'
}
</script>

<style scoped>
li {
    border: 1px solid black;
    margin: 5px;
}
</style>
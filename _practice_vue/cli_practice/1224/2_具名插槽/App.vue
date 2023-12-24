<template>
    <div class="container">
        <myCategory title="美食">
            <template v-slot:center>
                <img src="./assets/food.jpg" alt="">
            </template>
            <template v-slot:footer>
                <a href="#">Google</a>
            </template>
        </myCategory>
        <myCategory title="遊戲">
            <!-- 具名插槽簡寫 -->
            <template #center>
                <ul>
                    <li v-for="(g, index) in games"
                        :key="index">
                        {{ g }}</li>
                </ul>
            </template>
            <template #footer>
                <div class="foot">
                    <a href="#">單機</a>
                    <a href="#">多人</a>
                </div>
            </template>
        </myCategory>
        <myCategory title="電影">
            <template #center>
                <img src="./assets/food.jpg" alt="">
            </template>
            <template #footer>
                <div class="foot">
                    <a href="#">經典</a>
                    <a href="#">經典</a>
                    <a href="#">經典</a>
                </div>
                <h4>歡迎前來</h4>
            </template>
        </myCategory>
    </div>
</template>

<script>
import myCategory from './components/myCategory';

export default {
    name: 'App',
    components: { myCategory },
    data() {
        return {
            foods: ['火锅', '烧烤', '小龙虾', '牛排'],
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
            films: ['《教父》', '《拆弹专家》', '《你好，李焕英》', '《尚硅谷》']
        }
    },
}
</script>

<style>
.container,
.foot {
    display: flex;
    justify-content: space-around;
}

img {
    width: 100%;
}
</style>
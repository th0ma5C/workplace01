<template>
    <div class="container">
        <myCategory title="美食">
            <img src="./assets/food.jpg" alt="">
        </myCategory>
        <myCategory title="遊戲">
            <ul>
                <li v-for="(g, index) in games" :key="index">
                    {{ g }}</li>
            </ul>
        </myCategory>
        <myCategory title="電影">
            <img src="./assets/food.jpg" alt="">
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
.container {
    display: flex;
    justify-content: space-around;
}

img {
    width: 100%;
}
</style>
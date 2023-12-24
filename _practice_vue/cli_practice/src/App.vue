<template>
    <div class="container">
        <myCategory title="遊戲">
            <ul>
                <li v-for="(g, index) in games" :key="index">
                    {{ g }}</li>
            </ul>
        </myCategory>
        <myCategory title="遊戲">
            <ul>
                <li v-for="(g, index) in games" :key="index">
                    {{ g }}</li>
            </ul>
        </myCategory>
        <myCategory title="遊戲">
            <ul>
                <li v-for="(g, index) in games" :key="index">
                    {{ g }}</li>
            </ul>
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
            games: ['红色警戒', '穿越火线', '劲舞团', '超级玛丽'],
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
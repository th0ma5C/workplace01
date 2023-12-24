<template>
    <div class="container">
        <!-- 作用域插槽，直接在組件標籤上使用 -->
        <myCategory title="遊戲" v-slot="childProps">
            <ul>
                <li v-for="(g, index) in childProps.games"
                    :key="index">
                    {{ g }}</li>
            </ul>
        </myCategory>
        <!-- 具名作用域，需使用template，可使用解構賦值 -->
        <myCategory title="遊戲">
            <template #center="{ games }">
                <ol style="color: red;">
                    <li v-for="(g, index) in games"
                        :key="index">
                        {{ g }}</li>
                </ol>
            </template>
        </myCategory>
        <!-- 可接收多個prop -->
        <myCategory title="遊戲" v-slot="childProps">
            <h4 style="text-align: center;">{{ childProps.msg }}
            </h4>
        </myCategory>
    </div>
</template>

<script>
import myCategory from './components/myCategory';

export default {
    name: 'App',
    components: { myCategory },
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
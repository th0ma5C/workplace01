<template>
    <div class="container">
        <div class="btnContainer">
            <button>當季新品</button>
            <button>熱銷排行</button>
            <button>SEE MORE</button>
        </div>
        <a href="">
            <span>完整菜單</span>
        </a>
    </div>

</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    position: relative;
    border: 1px solid black;
    margin: 0.5rem 0rem;
    display: flex;
    align-items: center;

    .btnContainer {
        display: flex;
        align-items: center;
        border: 1px solid black;
        width: 80%;

        &:after {
            content: '';
            width: 600px;
            height: 1px;
            background-color: black;
            transform: translateX(50%);
            margin: 1rem 2rem;
        }

        button {
            display: inline-flex;
            align-items: center;
            padding: 0;
            border: none;
            width: 150px;
            height: 150px;
            font-size: 16px;
        }
    }

    span {
        position: absolute;
        right: 10%;
        transform: translateY(-50%);
        font-family: Arial, Helvetica, sans-serif;
        border: 1px solid;
        line-height: 48px;
    }
}
</style>
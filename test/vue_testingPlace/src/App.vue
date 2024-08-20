<template>
    <div class="header">
        <div class="filter">
            <h2>Selected name: {{ filterWord }}</h2>
            <div v-for="(item, index) in data" :key="index">
                <input type="checkbox" v-model="filterWord"
                    :id="item.name" :value="item.name">
                <label :for="item.name">{{ item.name
                    }}</label>
            </div>
        </div>

        <div class="sort">
            <h2>Selected: {{ sortOrder }}</h2>
            <select v-model="sortOrder">
                <option disabled value="">Please select one
                </option>
                <option v-for="(item, index) in sortList"
                    :key="index">{{ item }}</option>
            </select>
        </div>

        <div class="btnGroup">
            <button @click="plus">新增</button>
            <button @click="minus">刪除</button>
            <button @click="shuffle">洗牌</button>
            <button @click="reset">重置</button>
        </div>
    </div>

    <div class="container" ref="container">
        <div v-for="(item, index) in showData" :key="index"
            ref="box" class="box">
            {{ item.name }} <br>
            {{ item.id }}
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, ref, type Ref, watch, nextTick } from 'vue';
import { shuffle as _shuffle } from 'lodash-es';
import { gsap } from 'gsap'

let data = ref([
    {
        name: "tom",
        id: 123
    },
    {
        name: "jack",
        id: 456
    },
    {
        name: "ken",
        id: 789
    },
    {
        name: "dick",
        id: 1011
    },
    {
        name: "musk",
        id: 1213
    },
])

let filterWord: Ref<string[]> = ref([]);
let sortOrder = ref('asc');
let sortList = ref(['asc', 'desc'])

type CompareFn<T> = (a: T, b: T) => number;

const compareFn = <T>(key: (item: T) => any, order: number): CompareFn<T> => {
    let isDESC = order !== 0;
    return (a: T, b: T): number => {
        const aValue = key(a);
        const bValue = key(b);

        if (aValue < bValue) {
            return isDESC ? -1 : 1;
        } else if (aValue > bValue) {
            return isDESC ? 1 : -1;
        } else {
            return 0;
        }
    }
}

let showData = computed(() => {
    let result = data.value;

    if (filterWord.value.length != 0) {
        result = result.filter((item) => {
            for (let i of filterWord.value) {
                if (item.name == i) return true
            }
        })
    }


    switch (sortOrder.value) {
        case 'asc':
            result.sort(compareFn(item => item.id, 1))
            break;
        case 'desc':
            result.sort(compareFn(item => item.id, 0))
            break;
        default:
            result.sort(compareFn(item => item.id, 1))
            break;
    }

    return result
})

watch(showData, () => {
    nextTick(() => {
        const elements = document.querySelectorAll('.box');
        gsap.from(elements, {
            opacity: 0,
            y: 20,
            duration: 0.5,
            stagger: 0.1
        });
    });
});

function plus() {
    data.value.push({
        name: "tom",
        id: 123
    })
}

function minus() {
    data.value.pop()
}

function shuffle() {
    data.value = _shuffle(data.value);
    console.log(data.value);
}

function reset() {
    data.value = [
        {
            name: "tom",
            id: 123
        },
        {
            name: "jack",
            id: 456
        },
        {
            name: "ken",
            id: 789
        },
        {
            name: "dick",
            id: 1011
        },
        {
            name: "musk",
            id: 1213
        },
    ]
}
</script>

<style scoped lang="scss">
.header {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .filter {
        width: 600px;
    }

    .sort {
        align-self: self-start;
        width: 150px;
    }
}

.container {
    // width: 100vw;
    // height: 100vh;
    display: grid;
    justify-items: center;
    grid-template-columns: repeat(2, 1fr);
    gap: 3rem;
    margin-top: 2rem;
    padding: 3rem;
    outline: 1px solid black;

    .box {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100px;
        height: 100px;
        outline: 1px solid black;
        background-color: antiquewhite;
    }
}
</style>
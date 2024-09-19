<template>
    <div>
        {{ state.count }}
    </div>
    <button @click="state.count = 2;">+++</button>
</template>

<script setup lang="ts">
// import { computed } from 'vue';

class Dep {
    constructor() {
        this.subscribers = new Set();
    }

    depend() {
        if (activeUpdate) {
            this.subscribers.add(activeUpdate);
        }
    }

    notify() {
        this.subscribers.forEach(sub => sub());
    }
}

let activeUpdate = null;
function watchEffect(update) {
    activeUpdate = update;
    update();  // 執行一次函數來觸發依賴收集
    activeUpdate = null;
}

// 建立一個響應式的代理
function reactive(target) {
    const dep = new Dep();

    return new Proxy(target, {
        get(obj, key) {
            dep.depend();
            return obj[key];
        },
        set(obj, key, value) {
            obj[key] = value;
            dep.notify();
            return true;
        }
    });
}

// 計算屬性的類似實現
function computed(getter) {
    let value;
    let dirty = true;

    const effect = () => {
        if (dirty) {
            value = getter();
            dirty = false;
        }
        return value;
    };

    return {
        get value() {
            watchEffect(effect);
            return effect();
        }
    };
}

// 示範使用
const state = reactive({ count: 1 });

const doubled = computed(() => state.count * 2);

console.log(doubled.value); // 2
state.count = 2;
console.log(doubled.value); // 4

</script>

<style scoped></style>
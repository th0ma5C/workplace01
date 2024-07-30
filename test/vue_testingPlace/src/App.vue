<template>
    <div class="expandable-grid-container">
        <div class="grid" :style="gridStyle">
            <div v-for="i in 12" :key="i" class="grid-item">
                Item {{ i }}
            </div>
        </div>
        <button @click="toggleExpand" class="expand-button">
            {{ isExpanded ? '收起' : '展開' }}
        </button>
    </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from 'vue'

export default defineComponent({
    name: 'ExpandableGrid',
    setup() {
        const isExpanded = ref(false)
        const gridHeight = ref('200px')  // 初始高度，可以根據需要調整

        const toggleExpand = () => {
            isExpanded.value = !isExpanded.value
            gridHeight.value = isExpanded.value ? '300px' : '200px'  // 展開後的高度，可以根據需要調整
        }

        const gridStyle = computed(() => ({
            height: gridHeight.value,
            gridTemplateRows: isExpanded.value ? 'repeat(3, 1fr)' : 'repeat(2, 1fr)'
        }))

        return {
            isExpanded,
            toggleExpand,
            gridStyle
        }
    }
})
</script>

<style scoped>
.expandable-grid-container {
    width: 100%;
    max-width: 800px;
    margin: 0 auto;
}

.grid {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 10px;
    transition: all 0.5s ease-in-out;
    overflow: hidden;
}

.grid-item {
    background-color: #f0f0f0;
    padding: 20px;
    text-align: center;
    border-radius: 5px;
}

.grid-item:nth-child(n+9) {
    opacity: 0;
    transform: translateY(-20px);
    transition: opacity 0.5s ease-in-out, transform 0.5s ease-in-out;
}

.grid[style*="300px"] .grid-item:nth-child(n+9) {
    opacity: 1;
    transform: translateY(0);
}

.expand-button {
    margin-top: 20px;
    padding: 10px 20px;
    background-color: #4CAF50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
}

.expand-button:hover {
    background-color: #45a049;
}
</style>
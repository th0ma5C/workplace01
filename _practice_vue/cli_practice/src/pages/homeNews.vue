<template>
    <div>
        <ul>
            <li :style="{ opacity }">歡迎光臨</li>
            <li>news001 <input type="text"></li>
            <li>news002 <input type="text"></li>
            <li>news003 <input type="text"></li>
        </ul>
    </div>
</template>

<script>
export default {
    name: 'homeNews',
    data() {
        return {
            opacity: 1,
        }
    },
    activated() {
        this.timer = setInterval(() => {
            this.opacity -= 0.05;
            console.log('@');
            if (this.opacity <= 0) this.opacity = 1;
        }, 100);
    },
    deactivated() {
        clearInterval(this.timer);
    },
}
</script>

<style scoped></style>
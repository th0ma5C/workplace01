<template>
    <div class="container">
        <div class="btnwrapper">
            <button class="left">左左左左左</button>
            <button class="right">右右右右</button>
            <div class="blocker1"></div>
            <div class="blocker2"></div>
        </div>
        <div class="btnwrapper2">
            <button class="left">左左左左左</button>
            <button class="right">右右右右</button>
            <div class="bag">
                <svg width="176" height="51"
                    viewBox="0 0 176 51" fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <g id="btnBac" filter="url('#btn')">
                        <rect id="center" class="center"
                            y="12" width="72" height="26"
                            fill="currentColor" />
                        <path id="right" class="right"
                            d="M176 51L104.133 51L88 8.40846e-06L176 7.15256e-07L176 51Z"
                            fill="currentColor" />
                        <path id="left" class="left"
                            d="M0 0H71.8667L88 51H0V0Z"
                            fill="currentColor" />
                    </g>

                    <filter id="btn">
                        <feGaussianBlur in="SourceGraphic"
                            result="blur"
                            stdDeviation="5" />
                        <feColorMatrix in="blur"
                            mode="matrix"
                            values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                            result="btn" />
                    </filter>
                </svg>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped lang="scss">
.container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    align-items: center;
    width: 100vw;
    height: 100vh;
}

.btnwrapper {
    display: flex;
    // gap: 1rem;
    position: relative;
    border: 1px solid black;
    border-radius: 25px;
    overflow: hidden;

    button {
        cursor: pointer;
        border: none;
        width: 100px;
        height: 50px;
        background-color: transparent;
        font-size: 16px;

        transition: background-color 0.5s ease;

        &:hover {
            // background-color: aqua
        }
    }

    &::before {
        border-radius: 25px 0 0 25px;
        content: '';
        // display: flex;
        // justify-content: center;
        // align-items: center;
        // text-align: center;
        width: 100px;
        height: 50px;
        position: absolute;
        left: 0;
        z-index: -1;
        background-color: aqua;
        transition: transform 0.5s ease, border-radius 0.5s ease;
    }

    @keyframes hide {
        from {
            background-color: transparent;
        }

        to {
            background-color: white;
        }
    }

    &:has(.right:hover) {

        &::before {
            border-radius: 0 25px 25px 0;
            transform: translateX(calc(100px));
        }

        .blocker1 {
            z-index: -2;
            transform: translateX(calc(-50% + 100px)) skew(15deg);
        }

        .blocker2 {
            // width: 15px;
            z-index: -1;
            transform: translateX(calc(-50% + 100px)) skew(15deg);
        }
    }

    .blocker1 {
        position: absolute;
        left: 50%;
        top: 0;
        z-index: -1;
        width: 15px;
        height: 50px;
        transform: translateX(-50%) skew(15deg);
        background-color: white;
        // border: 1px solid black;
        transition: transform 0.5s ease;
    }

    .blocker2 {
        position: absolute;
        left: 0px;
        top: 0;
        z-index: -2;
        width: 15px;
        height: 50px;
        transform: translateX(-50%) skew(15deg);
        background-color: white;
        // border: 1px solid black;
        transition: transform 0.5s ease;
    }
}

.btnwrapper2 {
    display: flex;
    position: relative;
    border: 1px solid black;
    border-radius: 25px;
    overflow: hidden;

    button {
        cursor: pointer;
        border: none;
        width: 100px;
        height: 50px;
        background-color: transparent;
        font-size: 16px;
        transition: background-color 0.5s ease;
    }

    &:has(.right:hover) {
        svg {
            .left {
                scale: 0;
            }

            .center {
                transform: translateX(100px);
            }

            .right {
                scale: 1;
            }
        }
    }

    .bag {
        display: flex;
        position: absolute;
        z-index: -1;

        svg {
            width: 200px;
            height: 80px;
            transform: translateY(-20%);

            .left {
                transition: all 0.5s ease;
                transform-origin: center;
                fill: aqua;
            }

            .center {
                transition: all 0.5s ease;
                transform-origin: center;
                fill: aqua;
            }

            .right {
                scale: 0;
                transition: all 0.5s ease;
                transform-origin: center;
                fill: aqua;
            }
        }
    }
}
</style>
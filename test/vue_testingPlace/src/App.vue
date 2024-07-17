<template>
    <div>
        <div class="menu">
            <ul>
                <li>
                    <span onmouseenter="hoverEnter(0)"><i
                            class="fas fa-igloo"></i></span>
                </li>
                <li> <span onmouseenter="hoverEnter(1)"><i
                            class="fas fa-campground"></i></span>
                </li>
                <li> <span onmouseenter="hoverEnter(2)"><i
                            class="fas fa-hotel"></i></span>
                </li>
                <li> <span onmouseenter="hoverEnter(3)"><i
                            class="fas fa-home"></i></span>
                </li>
                <span class="goo-index"
                    id="goo-index"></span>
            </ul>
        </div>
        <div class="content-wrapper">
            <div id="screen_0" class="screen visible">
                <h2>Frozen Solitude</h2>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Duis dolor felis,
                    rhoncus venenatis quam et, ultrices
                    aliquam eros. Phasellus ipsum justo,
                    aliquam vel iaculis a, lacinia a enim.
                    Aenean dapibus accumsan ante, a blandit
                    nibh fringilla ac. Quisque condimentum
                    ornare lectus sed facilisis.</p>
                <div class="image"
                    style="background-image:url('https://images.unsplash.com/photo-1543994731-56592a76a84c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=700&q=80')">
                </div>
            </div>
            <div id="screen_1" class="screen">
                <h2>Sleeping Under the Stars</h2>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Duis dolor felis,
                    rhoncus venenatis quam et, ultrices
                    aliquam eros. Phasellus ipsum justo,
                    aliquam vel iaculis a, lacinia a enim.
                    Aenean dapibus accumsan ante, a blandit
                    nibh fringilla ac. Quisque condimentum
                    ornare lectus sed facilisis.</p>
                <div class="image"
                    style="background-image:url('https://images.unsplash.com/photo-1545153996-e01b50d6ec38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1351&q=80')">
                </div>
            </div>

            <div id="screen_2" class="screen">
                <h2>Everyone Under One Roof</h2>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Duis dolor felis,
                    rhoncus venenatis quam et, ultrices
                    aliquam eros. Phasellus ipsum justo,
                    aliquam vel iaculis a, lacinia a enim.
                    Aenean dapibus accumsan ante, a blandit
                    nibh fringilla ac. Quisque condimentum
                    ornare lectus sed facilisis.</p>
                <div class="image"
                    style="background-image:url('https://images.unsplash.com/photo-1539693010221-cd218dfe6565?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80')">
                </div>
            </div>
            <div id="screen_3" class="screen">
                <h2>Peaceful and Comforting</h2>
                <p>Lorem ipsum dolor sit amet, consectetur
                    adipiscing elit. Duis dolor felis,
                    rhoncus venenatis quam et, ultrices
                    aliquam eros. Phasellus ipsum justo,
                    aliquam vel iaculis a, lacinia a enim.
                    Aenean dapibus accumsan ante, a blandit
                    nibh fringilla ac. Quisque condimentum
                    ornare lectus sed facilisis.</p>
                <div class="image"
                    style="background-image:url('https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1273&q=80')">
                </div>
            </div>
        </div>

        <svg xmlns="http://www.w3.org/2000/svg"
            version="1.1" style="display:none;">
            <defs>
                <filter id="goo">
                    <feGaussianBlur in="SourceGraphic"
                        stdDeviation="10" result="blur" />
                    <feColorMatrix in="blur" mode="matrix"
                        values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7"
                        result="goo" />
                    <feBlend in="SourceGraphic" in2="goo" />
                </filter>
            </defs>
        </svg>
    </div>
</template>

<script setup lang="js">
let gooIndex = document.getElementById('goo-index');
let hoverEnter = (index) => {
    gooIndex.style.top = (100 * index) + 'px';
    let allScreens = document.querySelectorAll('.screen');
    allScreens.forEach(e => {
        e.classList.remove('visible');
    });
    let nowVisible = document.getElementById('screen_' + index);
    nowVisible.classList.add('visible');
};
</script>

<style scoped lang="scss">
@import url('https://fonts.googleapis.com/css?family=Open+Sans:400,600,700,800&display=swap');
$font-sans: 'Open Sans', sans-serif;
$color-dark: #333;
$color-light: #fff;
$color-prime: #ff4761;

*,
*:before,
*:after {
    box-sizing: border-box;
    margin: 0px;
    padding: 0px;
}

html,
body {
    width: 100%;
    height: 100%;
    font-family: $font-sans;
}

.menu {
    position: fixed;
    left: 0;
    top: 0;
    width: 100px;
    background: $color-prime;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;

    ul {
        list-style: none;
        margin: 0px;
        width: 100%;
        position: relative;
        padding: 0px;
        filter: url('#goo');
        z-index: 1;

        li {
            width: 100%;
            margin: 0px;
            padding: 0px;
            display: relative;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        span {
            background: $color-light;
            border-radius: 50px;
            font-size: 25pt;
            width: 80px;
            height: 80px;
            margin: 10px 0px;
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 1;
            cursor: pointer;
            transition: all 0.5s ease;
            color: $color-dark;
        }

        .goo-index {
            width: 160px;
            height: 80px;
            background: white;
            position: absolute;
            left: 10px;
            top: 0px;
            border-radius: 100px 0px 0px 100px;
            z-index: -1;
            transition: all 1s ease;

            &:before {
                content: '';
                position: absolute;
                width: 30px;
                height: 20px;
                border-radius: 20px 0px 0px 20px;
                background-image: radial-gradient(circle at 10px 0px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 20px, white 20px);
                top: -22px;
                left: 60px;
            }

            &:after {
                content: '';
                position: absolute;
                width: 30px;
                height: 20px;
                border-radius: 20px 0px 0px 20px;
                background-image: radial-gradient(circle at 10px 20px, rgba(0, 0, 0, 0) 0, rgba(0, 0, 0, 0) 20px, white 20px);
                bottom: -22px;
                left: 60px;

            }
        }

        li {
            &:hover {
                span {}
            }
        }
    }
}

.content-wrapper {
    width: calc(100% - 100px);
    position: relative;
    left: 100px;
    height: 100%;
    overflow: hidden;
    padding: 50px;
    display: flex;
    justify-content: center;
}

.screen {
    width: calc(100% - 100px);
    max-width: 800px;
    height: 100%;
    position: absolute;
    top: -100%;
    background: $color-light;
    opacity: 0;
    display: grid;
    grid-template-rows: 50px auto auto;
    grid-template-columns: 100%;
    grid-template-areas: 'heading' 'text' 'image';
    transition: all 1s ease;
    transition-delay: 0s;

    &.visible {
        top: 50px;
        opacity: 1;
        transition: all 1.5s ease;
        transition-delay: 0.8s;
    }

    h2 {
        grid-area: heading;
    }

    p {
        margin-top: 40px;
        grid-area: text;
        text-align: center;
        justify-content: center;
        align-items: center;
        display: flex;
    }

    .image {
        width: 100%;
        height: 500px;
        border-radius: 10px;
        background-size: cover;
        background-position: center, center;
    }
}


h2 {
    font-size: 25pt;
    position: relative;
    text-align: center;

    &:after {
        content: '';
        position: absolute;
        width: 70px;
        height: 5px;
        background: $color-prime;
        left: calc(50% - 35px);
        bottom: -15px;
    }
}
</style>
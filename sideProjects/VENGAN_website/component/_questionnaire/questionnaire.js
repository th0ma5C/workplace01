const vm = Vue.createApp({
    data() {
        return {
            bounce_display: 1,
            page_top: 0,
            page_num: 1,
            userName: "",
            score: {
                a: 0,//米食
                b: 0,//沙拉
                c: 0,//甜點
                d: 0,//果昔
            },
            option_class: "",

        }
    },
    methods: {
        bounce() {
            alert("恭喜獲得5%折價券");
            this.bounce_display = 0;
        },
        next_page() {
            if (this.userName.trim() === "") {
                alert("請輸入您的名字");
                return;
            }
            this.page_top -= 100;
            this.page_num += 1;
        },
        pre_page() {
            this.page_top += 100;
            if (this.page_num == 1) { }
            else {
                this.page_num -= 1;
            }
        },
        option_click() {
            if (this.option_class == "") {
                this.option_class = "click";
                this.next_page();
            } else {
                this.option_class = "";
            }

        },
    },
    computed: {

    },
}).mount("#quiz")

const section = document.querySelector(".bounce");
const logo = document.querySelector(".logo");
const FPS = 60;
section.style.height = window.innerHeight + "px";
section.style.width = window.innerWidth + "px";

// Logo moving velocity Variables
let xPosition = 10;
let yPosition = 10;
let xSpeed = 2;
let ySpeed = 2;
function update() {
    logo.style.left = xPosition + "px";
    logo.style.top = yPosition + "px";
}

setInterval(() => {
    if (xPosition + logo.clientWidth >= window.innerWidth || xPosition <= 0) {
        xSpeed = -xSpeed;
        logo.style.fill = randomColor();
    }
    if (yPosition + logo.clientHeight >= window.innerHeight || yPosition <= 0) {
        ySpeed = -ySpeed;
        logo.style.fill = randomColor();
    }

    xPosition += xSpeed;
    yPosition += ySpeed;
    update();
}, 1000 / FPS);
function randomColor() {
    let color = "#";
    color += Math.random().toString(16).slice(2, 8).toUpperCase();

    return color;
}
console.log(randomColor());

window.addEventListener("resize", () => {
    xPosition = 10;
    yPosition = 10;

    section.style.height = window.innerHeight + "px";
    section.style.width = window.innerWidth + "px";
});



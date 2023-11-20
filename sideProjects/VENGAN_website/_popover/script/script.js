const vm = Vue.createApp({
    data() {
        return {
            display: false,
            crd_opn: `<span><img src="./img/x_icon.svg" alt="X" style="padding: 6px 6px 0 6px; width: 36px;"></span>`,
            crd_cls: `<span><img src="./img/Logo1.PNG" alt="LOGO"></span>
                      <span>會員中心</span>`,
        }
    },
    methods: {
        toggle() {
            this.display = !this.display;
        },
    },
}).mount("#demo")
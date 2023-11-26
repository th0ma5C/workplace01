const vm = Vue.createApp({
    data() {
        return {
            display: false,
            tab: 1,
            header: {
                title: 1,
                text: 0,
                height: 120
            },
            crd_opn: `<span><img src="./popover_img/x_icon.svg" alt="X" style="padding: 6px 6px 0 6px; width: 36px;"></span>`,
            crd_cls: `<span><img src="./popover_img/Logo1.PNG" alt="LOGO"></span>
                      <span>會員中心</span>`,
            mber_tab: `<p>請先登入</p>`,

        }
    },
    mounted() {
        document.addEventListener("click", this.bodyClosePop);

    },
    beforeUnmount() {
        document.removeEventListener("click", this.bodyClosePop)
    },
    methods: {
        toggle() {
            this.display = !this.display;
        },
        bodyClosePop() {
            if (this.display == true) {
                this.display = false;
            }
            // this.display = !this.display;
        },
        header_collapse(e) {
            if (e.deltaY > 0) {
                this.header.title = 0;
                this.header.text = 1;
                this.header.height = 53
            } else {
                this.header.title = 1;
                this.header.text = 0;
                this.header.height = 120
            }
        },
    }

}).mount("#popover")
class Snake {
    container: HTMLElement;
    snakeHead: HTMLElement;
    snakeBody: HTMLCollection;

    constructor() {
        this.container = document.getElementById('snakeContainer')!;
        this.snakeHead = document.querySelector('#snakeContainer > div') as HTMLElement;
        this.snakeBody = this.container.getElementsByTagName('div');
    }

    get X() {
        return this.snakeHead.offsetLeft;
    }
    get Y() {
        return this.snakeHead.offsetTop;
    }
    set X(val: number) {
        if (this.X === val) return;
        // 限制撞牆
        if (val < 0 || val > 290) {
            throw new Error('撞牆了！');
        }
        // 限制調頭
        if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetLeft === val) {
            if (val > this.X) {
                val = this.X - 10;
            } else {
                val = this.X + 10;
            }
        }

        this.moveBody();
        this.snakeHead.style.left = val + 'px';
        this.checkSelfEating();
    }
    set Y(val: number) {
        if (this.Y === val) return;
        if (val < 0 || val > 290) {
            throw new Error('撞牆了！');
        }
        if (this.snakeBody[1] && (this.snakeBody[1] as HTMLElement).offsetTop === val) {
            if (val > this.Y) {
                val = this.Y - 10;
            } else {
                val = this.Y + 10;
            }
        }



        this.moveBody();
        this.snakeHead.style.top = val + 'px';
        this.checkSelfEating();
    }

    // 吃食物增加身體
    addBody() {
        this.container.insertAdjacentHTML('beforeend', '<div></div>');
    }
    // 身體移動
    moveBody() {
        for (let i = this.snakeBody.length - 1; i > 0; i--) {
            let X = (this.snakeBody[i - 1] as HTMLElement).offsetLeft;
            let Y = (this.snakeBody[i - 1] as HTMLElement).offsetTop;

            (this.snakeBody[i] as HTMLElement).style.left = X + 'px';
            (this.snakeBody[i] as HTMLElement).style.top = Y + 'px';
        }
    }

    checkSelfEating() {
        for (let i = 1; i < this.snakeBody.length; i++) {
            let body = this.snakeBody[i] as HTMLElement;
            if (this.X === body.offsetLeft && this.Y === body.offsetTop) {
                throw new Error('咬到自己了！');
            }
        }
    }
}

export default Snake;
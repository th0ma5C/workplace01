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
        if (val < 0 || val > 290) {
            throw new Error('撞牆了！');
        }

        this.snakeHead.style.left = val + 'px';
    }
    set Y(val: number) {
        if (this.Y === val) return;
        if (val < 0 || val > 290) {
            throw new Error('撞牆了！');
        }

        this.snakeHead.style.top = val + 'px';
    }

    addBody() {
        this.container.insertAdjacentHTML('beforeend', '<div></div>');
    }

    moveBody() {

    }
}

export default Snake;
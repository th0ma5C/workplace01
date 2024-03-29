class Food {
    element: HTMLElement;

    constructor() {
        this.element = document.getElementById('food')!;
    }

    get X() {
        return this.element.offsetLeft;
    }
    get Y() {
        return this.element.offsetTop;
    }
    // 隨機食物位置
    changeFoodPosition() {
        // 食物位置 0-290, 須可以被10整除 
        let top = Math.round(Math.random() * 29) * 10;
        let left = Math.round(Math.random() * 29) * 10;

        this.element.style.top = top + 'px';
        this.element.style.left = left + 'px';
    }
}

export default Food;
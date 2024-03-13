import Food from './Food';
import ScorePanel from './ScorePanel';
import Snake from './Snake';

class GameControl {
    snake: Snake;
    food: Food;
    scorePanel: ScorePanel;
    direction: string = '';
    isLive = true;

    constructor() {
        this.snake = new Snake();
        this.food = new Food();
        this.scorePanel = new ScorePanel();

        this.init();
    }

    init() {
        document.addEventListener('keydown', this.keydownHandler.bind(this));
        this.move();
    }

    keydownHandler(e: KeyboardEvent) {
        // if(e.key)
        this.direction = e.key;
        /**
         * 方向
         * ArrowUp
         * ArrowDown
         * ArrowLeft
         * ArrowRight
         */
    }

    move() {
        let X = this.snake.X;
        let Y = this.snake.Y;

        // 根據方向修改X、Y值
        switch (this.direction) {
            case 'ArrowUp': //向上
                Y -= 10;
                break;
            case 'ArrowDown': //向下
                Y += 10;
                break;
            case 'ArrowLeft': //向左
                X -= 10;
                break;
            case 'ArrowRight': //向右
                X += 10;
                break;
        }

        this.eat(X, Y);

        try {
            this.snake.X = X;
            this.snake.Y = Y;
        } catch (e: any) {
            alert(e.message + 'Game Over !');
            this.isLive = false;
        }

        this.isLive && setTimeout(this.move.bind(this), 300 - (this.scorePanel.level - 1) * 30);
    }

    eat(X: number, Y: number) {
        if (X === this.food.X && Y === this.food.Y) {
            this.food.changeFoodPosition();
            this.scorePanel.addScore();
            this.snake.addBody();
        }
    }
}

export default GameControl; 
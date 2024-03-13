class ScorePanel {
    score = 0;
    level = 1;
    scoreEl: HTMLElement;
    levelEl: HTMLElement;
    maxLevel: number;
    levelLimit: number;

    constructor(maxLevel: number = 10, levelLimit: number = 10) {
        this.scoreEl = document.getElementById('score')!;
        this.levelEl = document.getElementById('level')!;
        this.maxLevel = maxLevel;
        this.levelLimit = levelLimit;
    }

    addScore() {
        this.scoreEl.innerHTML = ++this.score + '';
        if (this.score % this.levelLimit === 0) {
            this.levelUp();
        }
    }

    levelUp() {
        if (this.level < this.maxLevel) {
            this.levelEl.innerHTML = ++this.level + '';
        }
    }
}

export default ScorePanel;
export class Tennis {
    firstPlayerScoreTimes = 0;
    secondPlayerScoreTimes = 0;
    firstPlayerName = 'Tom';
    secondPlayerName = 'Elsa';
    advPlayerName = '';

    lookup = {
        0: 'love',
        1: 'fifteen',
        2: 'thirty',
        3: 'forty',
    }

    score() {
        if (this.isScoreDifferent()) {
            return this.readyToGamePoint() ? this.advStatus() : this.lookUpScore();
        }
        if (this.firstPlayerScoreTimes >= 3) {
            return 'deuce';
        }
        return `${this.lookup[this.firstPlayerScoreTimes]} all`;
    }

    advStatus() {
        this.advPlayerName = this.advPlayer();
        return this.isAdv() ? this.advPlayerName + ' adv' : this.advPlayerName + ' win';
    }

    lookUpScore() {
        return `${this.lookup[this.firstPlayerScoreTimes]} ${this.lookup[this.secondPlayerScoreTimes]}`;
    }

    advPlayer() {
        return this.firstPlayerScoreTimes > this.secondPlayerScoreTimes ?
            this.firstPlayerName : this.secondPlayerName;
    }

    isAdv() {
        return Math.abs(this.firstPlayerScoreTimes - this.secondPlayerScoreTimes) === 1;
    }

    readyToGamePoint() {
        return this.firstPlayerScoreTimes > 3 || this.secondPlayerScoreTimes > 3;
    }

    isScoreDifferent() {
        return this.firstPlayerScoreTimes !== this.secondPlayerScoreTimes;
    }

    firstPlayerScore() {
        this.firstPlayerScoreTimes++;
    }

    secondPlayerScore() {
        this.secondPlayerScoreTimes++;
    }
}
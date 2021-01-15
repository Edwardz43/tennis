import {Tennis} from "../src/tennis";

describe('tennis score', () => {
    let tennis = new Tennis();
    beforeEach(() => {
        tennis = new Tennis();
    });

    function shouldBe(expected) {
        expect(tennis.score()).toBe(expected)
    }

    function addFirstPlayerScore(times) {
        for (let i = 0; i < times; i++) {
            tennis.firstPlayerScore();
        }
    }

    function addSecondPlayerScore(times) {
        for (let i = 0; i < times; i++) {
            tennis.secondPlayerScore();
        }
    }

    function deuce() {
        addFirstPlayerScore(3);
        addSecondPlayerScore(3);
    }

    it('should be love all', () => {
        shouldBe('love all');
        ;
    });

    it('should be fifteen love', () => {
        tennis.firstPlayerScore();
        shouldBe('fifteen love');
        ;
    });

    it('should be thirty love', () => {
        addFirstPlayerScore(2);
        shouldBe('thirty love');
        ;
    });

    it('should be forty love', () => {
        addFirstPlayerScore(3);
        shouldBe('forty love');
        ;
    });

    it('should be love fifteen', () => {
        tennis.secondPlayerScore();
        shouldBe('love fifteen');
        ;
    });

    it('should be love thirty', () => {
        addSecondPlayerScore(2);
        shouldBe('love thirty');
    });

    it('should be love forty', () => {
        addSecondPlayerScore(3);
        shouldBe('love forty');
    });

    it('should be fifteen all', () => {
        tennis.firstPlayerScore()
        tennis.secondPlayerScore();
        shouldBe('fifteen all');
    });

    it('should be thirty all', () => {
        addFirstPlayerScore(2);
        addSecondPlayerScore(2);
        shouldBe('thirty all');
    });

    it('should be deuce', () => {
        deuce();
        shouldBe('deuce');
    });

    it('should be Tom adv', () => {
        deuce();
        tennis.firstPlayerScore();
        shouldBe('Tom adv');
    });

    it('should be Elsa adv', () => {
        deuce();
        tennis.secondPlayerScore();
        shouldBe('Elsa adv');
    });

    it('should be Elsa win', () => {
        deuce();
        addSecondPlayerScore(2)
        shouldBe('Elsa win');
    });

    it('should be Tom win', () => {
        addFirstPlayerScore(4);
        addSecondPlayerScore(2);
        shouldBe('Tom win');
    });
});
class Game {
    constructor(container) {
        this.container = container;
        this.wordElement = container.querySelector('.word');
        this.winsElement = container.querySelector('.status__wins');
        this.lossElement = container.querySelector('.status__loss');
        this.timer = container.querySelector('.timer');
        this.intervalId = null;
        this.reset();
        this.registerEvents();

    }

    reset() {
        this.setNewWord();
        this.winsElement.textContent = 0;
        this.lossElement.textContent = 0;
    }


    registerEvents() {
        window.addEventListener('keydown', (event) => {
            if (event.key.toLowerCase() === this.currentSymbol.textContent.toLowerCase()) {
                this.success()
            } else {
                this.fail();
            }
        })
    }


    success() {
        if (this.currentSymbol.classList.contains("symbol_current")) this.currentSymbol.classList.remove("symbol_current");
        this.currentSymbol.classList.add('symbol_correct');
        this.currentSymbol = this.currentSymbol.nextElementSibling;

        if (this.currentSymbol !== null) {
            this.currentSymbol.classList.add('symbol_current');
            return;
        }

        this.winsElement.textContent = Number(this.winsElement.textContent) + 1;

        if (Number(this.winsElement.textContent) === 10) {
            alert('Победа!');
            this.reset();
        } else {
            this.setNewWord();
        }
    }

    fail() {
        this.lossElement.textContent = Number(this.lossElement.textContent) + 1;

        if (Number(this.lossElement.textContent) === 5) {
            alert('Вы проиграли!');
            this.reset();
        } else {
            this.setNewWord();
        }
    }

    setNewWord() {
        this.clearTimer();
        const word = this.getWord();
        this.renderWord(word);
        this.setTimer();
    }

    getWord() {
        const words = [
                'bob',
                'awesome',
                'netology',
                'hello',
                'kitty',
                'rock',
                'youtube',
                'popcorn',
                'cinema',
                'love',
                'javascript'
            ],
            index = Math.floor(Math.random() * words.length);

        return words[index];
    }

    renderWord(word) {
        const html = [...word]
            .map(
                (s, i) =>
                `<span class="symbol ${i === 0 ? 'symbol_current': ''}">${s}</span>`
            )
            .join('');
        this.wordElement.innerHTML = html;
        this.symbols = this.wordElement.querySelectorAll('.symbol');
        this.timer.textContent = this.symbols.length;
        this.currentSymbol = this.wordElement.querySelector('.symbol_current');

    }

    setTimer() {
        this.clearTimer();
        this.intervalId = setInterval(() => {
            this.timer.textContent = Number(this.timer.textContent) - 1;
            if (Number(this.timer.textContent) < 0) {
                this.clearTimer();
                this.fail();
            }
        }, 1000);
    }

    clearTimer() {
        if (this.intervalId) {
            clearInterval(this.intervalId);
            this.intervalId = null;
        }
    }
}

new Game(document.getElementById('game'))
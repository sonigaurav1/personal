const word = "apple";
const guesses = [];

const drawHangman = () => {
    const hangman = document.getElementById("hangman");
    hangman.innerHTML = "";

    for (let i = 0; i < word.length; i++) {
        if (guesses.includes(word[i])) {
            hangman.innerHTML += `<span>${word[i]}</span>`;
        } else {
            hangman.innerHTML += `<span>_</span>`;
        }
    }
};

const getGuess = () => {
    const input = document.getElementById("guess");
    const guess = input.value;
    input.value = "";

    return guess;
};

const checkGuess = (guess) => {
    if (guesses.includes(guess)) {
        alert("You've already guessed that letter!");
        return false;
    }

    if (word.includes(guess)) {
        guesses.push(guess);
        drawHangman();
        return true;
    } else {
        return false;
    }
};

const startGame = () => {
    drawHangman();

    const button = document.getElementById("guess-button");
    button.addEventListener("click", () => {
        const guess = getGuess();
        if (checkGuess(guess)) {
            if (guesses.length === word.length) {
                alert("You win!");
            }
        } else {
            alert("You lose!");
        }
    });
};

startGame();
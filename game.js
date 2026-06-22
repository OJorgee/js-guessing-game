// 1.generateRandomNumber
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}
//2.getPlayerGuess
function getPlayerGuess() {
    let guess;
    let isValid = false;
    while (!isValid) {
        let input = prompt("Guess a number between 1 and 100:");
        if (input === null) return null;

        guess = parseInt(input);
        if (!isNaN(guess) && guess >= 1 && guess <= 100) {
            isValid = true;
        } else {
            alert("Invalid input! Please enter a number between 1 and 100.");
        }
    }
    return guess;
}
//3.game
function game() {
    const targetNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;

    while (attempts < maxAttempts) {
        let guess = getPlayerGuess();
        if (guess === null) break; 

        attempts++;

        if (guess < targetNumber) {
            console.log("Too low! Attempts used: " + attempts);
        } else if (guess > targetNumber) {
            console.log("Too high! Attempts used: " + attempts);
        } else {
            console.log("Congratulations! You won in " + attempts + " tries!");
            return;
        }
    }
    console.log("Game Over! The correct number was: " + targetNumber);
}

game();
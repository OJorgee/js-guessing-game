// b)generate Random Number
function generateRandomNumber() {
    return Math.floor(Math.random() * 100) + 1;
}

// c) request the number from the user
function getPlayerGuess() {
    let guess;
    let isValid = false;
    while (!isValid) {
        let input = prompt("To play, please open dev tools (Browser Context Menu -> More tools -> Developer tools) \n" + 
            "(If console doesn't work press cancel and refresh the page) \n" +
            "Guess a number between 1 and 100:");
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

// d) check guess function
function checkGuess(guess, targetNumber) {
    if (guess < targetNumber) return "Too low! Your guess was " + guess + "!"
    if (guess > targetNumber) return "Too high! Your guess was " + guess + "!"
    return "Correct!";
}

// e )the main game function
function game() {
    const targetNumber = generateRandomNumber();
    let attempts = 0;
    const maxAttempts = 10;
    let won = false;
    let aborted = false;

    while (attempts < maxAttempts) {
        let guess = getPlayerGuess();
        if (guess === null) 
            {
                aborted = true;
                alert("Game Aborted, refresh the page to restart.")
                break;
            }

        attempts++;
        let result = checkGuess(guess, targetNumber);
        console.log(result + " (Attempts: " + attempts + "/10)");

        if (result === "Correct!") {
            won = true;
            // Bonus: Scoring System
            let score = (maxAttempts - attempts + 1) * 10;
            alert("Congratulations! You won in " + attempts + " tries! Your number was " + guess + "! \n" +
                "Your final score is: " + score + " points! \n" +
                "Refresh the page to play again.")
            break;
        }
    }

    if (!won && !aborted) {
        alert("Game Over! The correct number was: " + targetNumber + "\n" +
        "Refresh the page to play again.");
    }
}

game();
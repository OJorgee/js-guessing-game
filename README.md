# Number Guessing Game 

A terminal-based number guessing game built with JavaScript. This project was developed as a technical assignment to demonstrate clean code principles, logic implementation, and effective error handling.

## Features
* **Interactive Gameplay:** Challenges the player to guess a random number between 1 and 100 within 10 attempts.
* **Robust Error Handling:** Validates user inputs continuously, ensuring the game flow is never interrupted by invalid data.
* **Modular Logic:** Structured with distinct, reusable functions for random number generation, input validation, and game state management.
* **Scoring System:** A bonus feature that calculates a score based on the number of attempts used.

## How to Play
1. Open `index.html` in your web browser.
2. Open the **Browser Console** (`F12` or `Right-Click` -> `Inspect` -> `Console`).
3. The game will prompt you to enter your guesses directly in the browser's input dialog.

## Technical Implementation
* **Language:** Vanilla JavaScript (ES6+).
* **Game Logic:** Implemented using a `while` loop for input validation and a structured loop for game attempts.
* **Best Practices:** Follows the Single Responsibility Principle, ensuring each function handles exactly one task.

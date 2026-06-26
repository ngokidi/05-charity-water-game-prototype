let score = 0;
let progress = 0;

const scoreDisplay = document.getElementById("score");
const messageDisplay = document.getElementById("message");

// Update score on screen
function updateScore() {
    scoreDisplay.textContent = score;
}

// Move forward safely
function gainPoints() {
    score += 10;
    progress++;

    updateScore();

    messageDisplay.textContent =
        "✅ Great job! You're getting closer to clean water.";
    messageDisplay.style.color = "#159A48";

    // Optional win after 5 successful moves
    if (progress >= 5) {
        winGame();
    }
}

// Hit polluted water or trash
function losePoints() {
    score -= 5;

    if (score < 0) {
        score = 0;
    }

    updateScore();

    messageDisplay.textContent =
        "❌ You hit pollution! Be careful.";
    messageDisplay.style.color = "#F5402C";
}

// Player wins
function winGame() {
    messageDisplay.textContent =
        "🎉 Congratulations! You reached clean water!";
    messageDisplay.style.color = "#2E9DF7";

    // Disable buttons after winning
    const buttons = document.querySelectorAll(".path, .obstacle, .goal");

    buttons.forEach(button => {
        button.disabled = true;
    });
}

// Goal button clicked
function reachGoal() {
    winGame();
}

// Restart game
function resetGame() {
    score = 0;
    progress = 0;

    updateScore();

    messageDisplay.textContent =
        "💧 Game restarted. Help Dropy reach clean water!";
    messageDisplay.style.color = "#2E9DF7";

    // Re-enable buttons
    const buttons = document.querySelectorAll(".path, .obstacle, .goal");

    buttons.forEach(button => {
        button.disabled = false;
    });
}

// Load default message
messageDisplay.textContent =
    "💧 Click 'Move Forward' and avoid pollution!";
messageDisplay.style.color = "#2E9DF7";
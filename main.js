let humanScore = 0;
let computerScore = 0;
let debounce = 0;

function getComputerChoice() {
    let ran = Math.floor(Math.random() * 3) + 1;
    if (ran == 3) {
        return "rock";
    } else if (ran == 2) {
        return "paper";
    } else {
        return "scissors";
    };
};

function displayResults(result) {

    const resultText = document.getElementById("result");
        resultText.textContent = result;

        const humanResult = document.getElementById("human-score");
        humanResult.textContent = `You: ${humanScore}`;

        const computerResult = document.getElementById("computer-score");
        computerResult.textContent = `Computer: ${computerScore}`;

    if (result === "won") {
        resultText.style.color = "greenyellow";
    } else if (result === "lost") {
        resultText.style.color = "red";
    } else {
        resultText.style.color = "gray";
    };

    if (humanScore == 5 || computerScore == 5) {
        resultText.textContent = `The Winner is: ${humanScore == 5 ? "You" : "Computer"}`;
        debounce = 1;
    };
};

function playRound(human, computer) {
    if (human == computer) {
        return displayResults("draw");
    } else if (human == "rock") {
        if (computer == "scissors") {
            humanScore++;
            return displayResults("won");
        } else {
            computerScore++;
            return displayResults("lost");
        };
    } else if (human == "scissors") {
        if (computer == "paper") {
            humanScore++;
            return displayResults("won");
        } else {
            computerScore++;
            return displayResults("lost");
        };
    } else {
        if (computer == "rock") {
            humanScore++;
            return displayResults("won");
        } else {
            computerScore++;
            return displayResults("lost");
        };
    };
};

document.addEventListener('click', e => {
    if (debounce == 0) {
        switch (e.target.id) {
            case "rock": {
                playRound("rock", getComputerChoice());
                break;
            };
            case "paper": {
                playRound("paper", getComputerChoice());
                break;
            };
            case "scissors": {
                playRound("scissors", getComputerChoice());
                break;
            };
        };
    };
});
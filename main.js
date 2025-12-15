let humanScore = 0;
let computerScore = 0;
let rounds = 0;

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
    if (result === "won") {
        resultText.style.color = "greenyellow";
    } else if (result === "lost") {
        resultText.style.color = "red";
    } else {
        resultText.style.color = "gray";
    };
};

function playRound(human, computer) {
    if (human == computer) {
        return displayResults("draw");
    } else if (human == "rock") {
        if (computer == "scissors") {
            return displayResults("won");
        } else {
            return displayResults("lost");
        };
    } else if (human == "scissors") {
        if (computer = "paper") {
            return displayResults("won");
        } else {
            return displayResults("lost");
        };
    } else {
        if (computer == "rock") {
            return displayResults("won");
        } else {
            return displayResults("lost");
        };
    };
};

document.addEventListener('click', e => {
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
});
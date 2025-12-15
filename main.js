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

function playRound(human, computer) {
    if (human == computer) {
        console.log("Draw! Same Answer!");
    } else if (human == "rock") {
        if (computer == "scissors") {
            console.log("You Won! Rock beats Scissors!");
            return;
        } else {
            console.log("You Lost! Paper beats Rock!");
            return;
        };
    } else if (human == "scissors") {
        if (computer = "paper") {
            console.log("You Won! Scissors beats Paper!");
            return;
        } else {
            console.log("You Lost! Rock beats Scissors!");
            return;
        };
    } else {
        if (computer == "rock") {
            console.log("You Won! Paper beats Rock!");
            return;
        } else {
            console.log("You Lost! Scissors beats Paper!");
            return;
        };
    };
};

document.addEventListener('click', e => {
    switch (e.target.id) {
        case "rock": {
            playRound("rock", getComputerChoice());
        };
        case "paper": {
            playRound("paper", getComputerChoice());
        };
        case "scissors": {
            playRound("scissors", getComputerChoice());
        };
    };
});
let humanScore = 0;
let computerScore = 0;
let rounds = 0;

function getComputerChoice() {
    let ran = Math.floor(Math.random() * 3) + 1;
    if (ran == 3) {
        return "rock"
    } else if (ran == 2) {
        return "paper"
    } else {
        return "scissors"
    };
};

function getHumanChoice() {
    let ans = prompt("Type you choice: ").toLocaleLowerCase();
    return ans || "rock" // Default choice
};

function playRound(human, computer) {
    if (human == computer) {
        console.log("Draw! Same Answer!");
    } else if (human == "rock") {
        if (computer == "scissors") {
            console.log("You Won! Rock beats Scissors!");
        } else {
            console.log("You Lost! Paper beats Rock!");
        };
    } else if (human == "scissors") {
        if (computer = "paper") {
            console.log("You Won! Scissors beats Paper!");
        } else {
            console.log("You Lost! Rock beats Scissors!");
        };
    } else {
        if (computer == "rock") {
            console.log("You Won! Paper beats Rock!");
        } else {
            console.log("You Lost! Scissors beats Paper!");
        };
    };
};

function playGame() {
    while (rounds < 5) {
        let human = getHumanChoice();
        console.log(`Human Choice: ${human}`);
        let computer = getComputerChoice();
        console.log(`Computer Choice: ${computer}\n`);
        playRound(human, computer);
        rounds++;
    };
};

playGame();
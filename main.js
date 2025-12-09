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

function getResult(human, computer) {
    if (human == computer) {
        return "Draw!";
    };
    if (human == "rock") {
        if (computer == "scissors") {
            return "Win";
        } else {
            return "Lose";
        };
    } 
    if (human == "scissors") {
        if (computer = "paper") {
            return "Win";
        } else {
            return "Lose";
        };
    } else {
        if (computer == "rock") {
            return "Win";
        } else {
            return "Lose";
        };
    };
};

function playRound() {
    let human = getHumanChoice();
    console.log(human);
    let computer = getComputerChoice();
    console.log(computer);
    console.log(getResult(human,computer));
};

function playGame() {
    while (rounds < 5) {
        playRound();
        rounds++;
    };
};

playGame();
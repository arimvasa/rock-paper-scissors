const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'
let computerScore = 0
let playerScore = 0


const resetScore = () => {
    computerScore = 0;
    playerScore = 0;
}


// Returns a random choice between rock, paper and scissors
const getComputerChoice = () => {
    let computerChoices = [PAPER, ROCK, SCISSORS]
    // Returns 0,1 or 2
    let randomIndex = Math.floor(Math.random() * 3)
    return computerChoices[randomIndex]
}

const playRound = (playerSelection, computerSelection) => {
    let result

    const playerOption = document.getElementById("playerOption");
    playerOption.textContent = playerSelection;
    const computerOption = document.getElementById("computerOption");
    computerOption.textContent = computerSelection
    const roundResult = document.getElementById("roundResult");

    const computerScoreElement = document.getElementById("computerScore");
    computerScore.textContent = 0
    const playerScoreElement = document.getElementById("playerScore");
    playerScore.textContent = 0
    const winnerOfTheGame = document.getElementById("winnerOfTheGame")

    //input validation
    if (![ROCK, PAPER, SCISSORS].includes(playerSelection)) {
        throw new Error('Player selection is not accepted')
    }

    if ((playerSelection === computerSelection)) {
        result = "tie"
    }
    else if ((playerSelection === ROCK && computerSelection === PAPER)
        || (playerSelection === PAPER && computerSelection === SCISSORS)
        || (playerSelection === SCISSORS && computerSelection === ROCK)) {
        result = "computer wins"
        computerScore++

    }
    else {
        result = "player wins"
        playerScore++
    }

    roundResult.textContent = result
    computerScoreElement.textContent = computerScore;
    playerScoreElement.textContent = playerScore;


    if (computerScore === 5) {
        winnerOfTheGame.textContent = "the computer";
        resetScore();
        showDialog();

    }
    else if (playerScore === 5) {
        winnerOfTheGame.textContent = "the player";
        resetScore();
        showDialog();

    }
    else { winnerOfTheGame.textContent = ""; }


};

const dialogContainer = document.querySelector(".dialog-container");
const myDialog = document.getElementById("myDialog");
const yesButton = document.querySelector("#yesButton");


function showDialog() {
    dialogContainer.style.display = 'flex';
}

function hideDialog() {
    dialogContainer.style.display = 'none';
}

yesButton.addEventListener('click', function () {
    resetScore();
    hideDialog();
});



const shoot = document.getElementById("shoot")
const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector('#paperButton')
const scissorsButton = document.querySelector('#scissorsButton')

rockButton.addEventListener('click', () => {
    playRound(ROCK, getComputerChoice());
});
paperButton.addEventListener('click', () => {
    playRound(PAPER, getComputerChoice());
});
scissorsButton.addEventListener('click', () => {
    playRound(SCISSORS, getComputerChoice())
});

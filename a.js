const ROCK = 'rock'
const PAPER = 'paper'
const SCISSORS = 'scissors'

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
    }
    else {
        result = "player wins"
    }

    roundResult.textContent = result
    return result
}


const game = () => {

    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let computerSelection;

    const totalScore = document.getElementById("totalscore")
    const playerScore1 = document.getElementsById("playerScore1")
    const computerScore1 = document.getElementsById("computerScore1")

    computerSelection = getComputerChoice()
    const result = playRound(playerSelection, computerSelection)

    // auksanei to score ston kathe paixti
    if (result === "player") {
        playerScore++;
        console.log(`You Win! ${playerSelection} beats ${computerSelection}`)

    }
    else if (result === "computer") {
        computerScore++;
        console.log(`You Lose! ${playerSelection} loses to ${computerSelection}`)
    }
    else {
        console.log(`It's a tie!!!!`)
    }

    console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);

    if (playerScore === 5) {
        console.log("Player wins the game!");

    } else if (computerScore === 5) {
        console.log("Computer wins the game!");
    }

}


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

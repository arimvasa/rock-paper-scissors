
// Returns a random choice between rock, paper and scissors
function getComputerChoice() {
    let computerChoices = ["paper", "rock", "scissors"]
    // Returns 0,1 or 2
    let randomIndex = Math.floor(Math.random() * 3)
    return computerChoices[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let result

    if ((playerSelection === computerSelection)) {
        result === "It's a tie game"
    }
    else if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) {
        result = `You Lose! ${computerSelection} beats ${playerSelection}`
    }
    else {
        result = `You Win! ${playerSelection} beats ${computerSelection}`
    }

    return result
}


function game() {

    let computerScore = 0;
    let playerScore = 0;

    for (let i = 0; i < 5; i++) {
        playRound;
        console.log()

        const result = playRound()
        if (result === "player") {
            playerScore++;
            console.log("You win this round!")
        }

        else if (result === "computer") {
            computerScore++;
            console.log("You lose this round!")
        }
        else { console.log("It's a tie!") }

        const finalScore = playRound * 5
        if (playerScore > computerScore) { console.log("You win the game!"); }

        else if (playerScore < computerScore) { console.log("You lose the game!") }

        else { console.log("It's a tie game!") }







    }


}
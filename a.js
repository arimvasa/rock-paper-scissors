
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
        result === "tie"
    }
    else if ((playerSelection === "rock" && computerSelection === "paper")
        || (playerSelection === "paper" && computerSelection === "scissors")
        || (playerSelection === "scissors" && computerSelection === "rock")) {
        result = `computer`
    }
    else {
        result = "player"
    }

    return result
}


function game() {

    let computerScore = 0;
    let playerScore = 0;
    let playerSelection;
    let computerSelection;

    for (let i = 0; i < 5; i++) {
        console.log(`Round ${i + 1}`)

        playerSelection = window.prompt("what do you want?")
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

    }
    console.log(`Playerscore:${playerScore}`)
    console.log(`Computerscore:${computerScore}`)

    if (playerScore > computerScore) { console.log("You win the game!"); }

    else if (playerScore < computerScore) { console.log("You lose the game!") }

    else { console.log("It's a tie game!") }

}

// start
game()
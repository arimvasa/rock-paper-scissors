

function getComputerChoise() {
    let computerChoises = ("paper", "rock", "scissors")
    let randomIndex = Math.floor(Math.random() * 3) + 1
}


function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let greeting
    if (computerSelection === "paper" && playerSelection === "rock") { greeting = "You Lose! Paper beats Rock" }
    if (computerSelection === "rock" && playerSelection === "scissors") { greeting = "You Lose! Rock beats Scissors" }
    if (computerSelection === "scissors" && playerSelection === "paper") { greeting = "You Lose! Scissors beats Paper" }
    else if (playerSelection === computerSelection) { greeting === "it's a tie game " }

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
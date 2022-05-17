function computerPlay() {
    randomNumber =  Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // validate player selection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    if (playerSelection === computerSelection ) {
        return "Tie! You both chose " + playerSelection;
    } else if (playerSelection === "Rock") {
        if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock!";
        } else {
            return "You win! Rock beats Scissors!";
        }
    } else if (playerSelection === "Paper") {
        if (computerSelection === "Scissors") {
            return "You lose! Scissors beats Paper!";
        } else {
            return "You win! Paper beats Rock!";
        }
    } else if (playerSelection === "Scissors") {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors!";
        } else {
            return "You win! Scissors beats Paper!";
        }
    } 
}

const playerSelection = "rock";
const computerSelection = computerPlay();

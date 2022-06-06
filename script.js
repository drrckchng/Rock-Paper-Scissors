function computerPlay() {
    randomNumber =  Math.floor(Math.random() * 3);
    if(randomNumber === 0) {
        return "rock";
    } else if(randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // validate player selection
    playerSelection = playerSelection.toLowerCase();
    if(playerSelection === computerSelection ) {
        return "Tie! You both chose " + playerSelection;
    } else if(playerSelection === "rock") {
        if (computerSelection === "paper") {
            return "You lose! Paper beats Rock!";
        } else {
            return "You win! Rock beats Scissors!";
        }
    } else if(playerSelection === "paper") {
        if(computerSelection === "scissors") {
            return "You lose! Scissors beats Paper!";
        } else {
            return "You win! Paper beats Rock!";
        }
    } else if(playerSelection === "scissors") {
        if(computerSelection === "rock") {
            return "You lose! Rock beats Scissors!";
        } else {
            return "You win! Scissors beats Paper!";
        }
    } 
}

// On page load, game is loaded and set.
// 

function game() {
    let playerWins = 0;
    let cpuWins = 0;
    for(let i = 0; i < 5; i++){
        let userChoice = prompt("Rock, paper, or scissors?");
        let cpuChoice = computerPlay();
        let result = playRound(userChoice, cpuChoice);
        if(result.slice(0,7) === "You win") {
            playerWins++;
        } else if (result.slice(0,8) === "You lose") {
            cpuWins++;
        }
        console.log(result);
        console.log("Player:" + playerWins);
        console.log("CPU:" + cpuWins);
    }
    if(playerWins == cpuWins) {
        console.log("That's a wrap... It's a tie!");
    } else if(playerWins > cpuWins) {
        console.log("Congratulations! You win!");
    } else {
        console.log("Game over... You lost");
    }
}

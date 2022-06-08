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

function game(choice) {
    let userChoice = choice;
    let cpuChoice = computerPlay();
    let result = playRound(userChoice, cpuChoice);
    if(result.slice(0,7) === "You win") {
        playerWins++;
    } else if (result.slice(0,8) === "You lose") {
        cpuWins++;
    }
    gameText.innerText = result;
    updateScore();
    gameCounter++;
    checkGameOver();
}

function updateScore() {
    playerScore.innerText = "Player: " + playerWins;
    cpuScore.innerText = "CPU: " + cpuWins;
}


// Game is alerting before upadting the score...
// Possibly adding a button that's hidden until conditions are met
// to start "new game"
function checkGameOver() {
    if(gameCounter == 5) {
        if(playerWins == cpuWins) {
            alert("That's a wrap... It's a tie!");
        } else if(playerWins > cpuWins) {
            alert("Congratulations! You win!");
        } else {
            alert("Game over... You lost");
        }
        resetGame();
    }
}

function resetGame() {
    gameCounter = 0;
        playerWins = 0;
        cpuWins = 0;
        updateScore();
        gameText.innerText = "Welcome to Rock Paper Scissors";
}

const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName == 'BUTTON';
    if(!isButton) {
        return;
    }
    game(event.target.innerHTML);
});

let playerWins = 0;
let cpuWins = 0;
let gameCounter = 0;

const playerScore = document.getElementById('player-score');
const cpuScore = document.getElementById('cpu-score');
const gameText = document.getElementById('game-text');
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
// Simplest solution seem to be adding a element that indicates 
function checkGameOver() {
    if(gameCounter == 5) { // game has ended
        const resultDiv = document.getElementById('results');
        const endMessage = document.createElement('p');
        resultDiv.appendChild(endMessage);
        if(playerWins == cpuWins) {
            endMessage.innerText = "That's a wrap... It's a tie!";
        } else if(playerWins > cpuWins) {
            endMessage.innerText = "Congratulations! You win!";
        } else {
            endMessage.innerText = "Game over... You lost";
        } 
        endMessage.remove();
        resetGame();
    }
}

function disableButton(bool) {
    const buttons = document.querySelectorAll('.player-choice');
    buttons.forEach((element) => {
        element.disabled = bool;
    });
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
const buttonTest = document.getElementById('test');
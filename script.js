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
    // gameText.classList.add('show'); need to figure out how to reset animation
    updateScore();
    gameCounter++;
    checkGameOver();
}

function updateScore() {
    playerScore.innerText = "You: " + playerWins;
    cpuScore.innerText = "CPU: " + cpuWins;
}


function checkGameOver() {
    if(gameCounter == 5) { // Game has ended

        disableButton(true);
        modalContainer.classList.add('show');
        if(playerWins == cpuWins) {
            gameOverMsg.innerText = "That's a wrap... It's a tie!";
        } else if(playerWins > cpuWins) {
            gameOverMsg.innerText = "Congratulations! You win!";
        } else {
            gameOverMsg.innerText = "Game over... You lost";
        }
        // New game button to reset game
        newGameButton.addEventListener('click', (event) => {
            disableButton(false);
            resetGame();
            modalContainer.classList.remove('show');
        });
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
        updateScore(); // reset scores to 0 on DOM
        gameText.innerText = "Welcome to Rock Paper Scissors!";
}

const wrapper = document.getElementById('wrapper');
wrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName == 'BUTTON';
    if(!isButton) {
        return;
    }
    game(event.target.innerHTML);
});

// Initialize game
let playerWins = 0;
let cpuWins = 0;
let gameCounter = 0;

// Grab elements from DOM
const playerScore = document.getElementById('player-score');
const cpuScore = document.getElementById('cpu-score');
const gameText = document.getElementById('game-text');
const buttonTest = document.getElementById('test');
const modalContainer = document.getElementById('gameover-container');
const gameOverMsg = document.getElementById('gameover-message');
const newGameButton = document.getElementById('new-game');
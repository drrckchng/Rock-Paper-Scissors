function computerPlay() {
    randomNumber =  Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "Rock";
    } else if (randomNumber === 1) {
        return "Paper";
    } else {
        return "Scissor";
    }
}

function playRound(playerSelection, computerSelection) {
    // validate player selection
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase;
}

let testing = "adfEDDASde";
testing = testing.charAt(0).toUpperCase() + testing.slice(1).toLowerCase();
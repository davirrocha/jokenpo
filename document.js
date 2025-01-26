
let humanScore = 0
let machineScore = 0
let pointPlayer = document.querySelector(".scoreplayer")
let pointMachine = document.querySelector(".scoremachine")
let colorBorder = document.querySelector("section")
let textWinner = document.querySelector(".winner")
let btnChoices = document.querySelector(".div-btn")
let btnReset = document.querySelector(".btn-reset")
let invertval;

const GAME_OPTION = {
    SCISSORS: 'scissors',
    PAPER: 'paper',
    ROCK: 'rock',
}


const choiceHuman = (human) => {
    (playTheGame(human, choiceMachine()))
}

const choiceMachine = () => {
    const moves = [GAME_OPTION.SCISSORS, GAME_OPTION.PAPER, GAME_OPTION.ROCK]
    const randomNumber = Math.floor(Math.random() * 3)
    return moves[randomNumber]
}

function playTheGame(human, machine) {

    if (human === machine) {

        colorBorder.style.borderColor = '#fab842';

    }

    else if (
        (human == GAME_OPTION.SCISSORS && machine == GAME_OPTION.PAPER) ||
        (human == GAME_OPTION.PAPER && machine == GAME_OPTION.ROCK) ||
        (human == GAME_OPTION.ROCK && machine == GAME_OPTION.SCISSORS)) {
        colorBorder.style.borderColor = '#245043';
        humanScore++;
        pointPlayer.innerHTML = humanScore;

    }

    else {
        colorBorder.style.borderColor = '#f27d78';
        machineScore++;
        pointMachine.innerHTML = machineScore;


    }

    if (humanScore == 15) {
        textWinner.innerHTML = 'VOCÊ GANHOU😁';
        textWinner.style.color = '#245043';
        btnChoices.style.display = 'none';
        btnReset.style.display = 'block';
        textWinner.style.display = "block"

    }

    else if (machineScore == 15) {
        textWinner.innerHTML = 'VOCÊ PERDEU!🥲';
        textWinner.style.color = '#f27d78';
        btnChoices.style.display = 'none';
        btnReset.style.display = 'block';
        textWinner.style.display = "block";

    }

}

function resetGame() {
    textWinner.style.display = 'none';
    pointMachine.innerHTML = 0;
    pointPlayer.innerHTML = 0;
    machineScore = 0;
    humanScore = 0;
    colorBorder.style.borderColor = "white";
    btnChoices.style.display = 'block';
    btnReset.style.display = 'none';

}


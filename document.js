
let humanScore = 0
let machineScore = 0
let pointPlayer = document.querySelector(".scoreplayer")
let pointMachine = document.querySelector(".scoremachine")
const colorBorder = document.querySelector("section")
let textWinner = document.querySelector(".winner")
let loser = document.querySelector(".defeat")

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

        colorBorder.style.borderColor = 'yellow'
    }

    else if (
        (human == GAME_OPTION.SCISSORS && machine == GAME_OPTION.PAPER) ||
        (human == GAME_OPTION.PAPER && machine == GAME_OPTION.ROCK) ||
        (human == GAME_OPTION.ROCK && machine == GAME_OPTION.SCISSORS)) {
        colorBorder.style.borderColor = 'green'
        colorBorder.style.boxshadowColor = 'green'
        humanScore++
        pointPlayer.innerHTML = humanScore
    }

    else {
        colorBorder.style.borderColor = 'red'
        machineScore++
        pointMachine.innerHTML = machineScore
    }

    if (humanScore == 15) {
        textWinner.innerHTML = "VOCÊ GANHOU!!"
        textWinner.style.color = '#fab842'
    }

    else if (machineScore == 15) {
        textWinner.innerHTML = "VOCÊ PERDEU!❌"
        textWinner.style.color = '#'
    }

}








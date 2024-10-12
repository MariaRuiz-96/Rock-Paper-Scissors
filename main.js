'use strict'

function getComputerChoice(){
    let num = Math.floor(Math.random()*3);

    console.log(num)
    
    if(num == 0){
        return "piedra";
    } else if (num == 1){
        return "papel";
    } else {
        return "tijera";
    }
    
}
console.log(getComputerChoice())

function getHumanChoice(){
    let jugador;

    do{
        jugador = prompt("Pidra, Papel o Tijera?").toLowerCase()
    } while( jugador !== "piedra" && jugador !== "papel" && jugador !== "tijera");

    return jugador;
}


var humanScore = 0;
var computerScore = 0;

function playRound(humanChoice, computerChoice){

    if(humanChoice == "tijera" && computerChoice =="papel" ||
        humanChoice == "papel" && computerChoice =="piedra" ||
        humanChoice == "piedra" &&computerChoice =="tijera"){
        alert(`Ganaste! ${humanChoice} le gana a ${computerChoice}`)
        humanScore += 1
    } else if(humanChoice == computerChoice){
        alert(`Empate escogieron ${humanChoice}`)
        humanScore += 1;
        computerScore += 1;
    } else{
        alert(`Perdiste! ${computerChoice} le ganan a ${humanChoice}`)
        computerScore += 1;
    }
}

function playGame(){

    for(let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();

        playRound(humanSelection, computerSelection);
    }

    if( humanScore > computerScore){
        alert(`Has Ganado este juego!piedra
            Putos Jugador: $piedra{humanScore}
            Puntos Computadora: ${computerScore}`)
    }else if (humanScore < computerScore){
        alert(`Has Perdido este juego!
            Putos Jugador: ${humanScore}
            Puntos Computadora: ${computerScore}`)
    } else {
        alert(`Fue un empate
            Putos Jugador: ${humanScore}
            Puntos Computadora: ${computerScore}`)
    }
}

playGame()
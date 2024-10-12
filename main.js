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
        alert("gana jugador")
    } else if(humanChoice == computerSelection){
        alert("empate")
    } else{
        alert("computadora gana")
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

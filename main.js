'use strict'
function getComputerChoice(){
    let num = Math.floor(Math.random()*3)

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
    let jugador

    do{
        jugador = prompt("Pidra, Papel o Tijera?");
        jugador = jugador.toLowerCase()
    } while( jugador !== "piedra" && jugador !== "papel" && jugador !== "tijera");

    return jugador
}

getHumanChoice()




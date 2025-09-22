function getComputerChoice(){
    let choiceValue = Math.floor(Math.random() * 100); //assigns choiceValue with a random number between 0 and 99
    let choice = " ";

    if(choiceValue < 33){
        choice = "rock";
    }
    else if(choiceValue > 66){
        choice = "paper";
    }
    else if(choiceValue >= 33 || choiceValue <=66){
        choice = "scissors";
    }

    return choice;
}

function getPlayerChoice(){
    let choiceValue = prompt("Enter 'rock', 'papper', or 'scissors'");
    return choiceValue;
}

let playerScore = 0;
let compScore = 0;

let compChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

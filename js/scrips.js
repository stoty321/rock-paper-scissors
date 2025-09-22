function getComputerChoice(){
    let choiceValue = Math.floor(Math.random() * 100);
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

let compChoice = getComputerChoice();
let playerChoice = getPlayerChoice();

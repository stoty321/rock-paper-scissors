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

function playRound(playerChoice, compChoice){
    playerChoice = playerChoice.toLowerCase();

    if (playerChoice == "rock"){
        
        switch(compChoice){
            case "paper":
                compScore += 1;
                break;
            case "scissors":
                playerScore += 1;             
        }
    }
    else if(playerChoice == "paper"){

        switch(compChoice){
            case "rock":
                playerScore += 1;
                break;
            case "scissors":
                compScore +=1;
        }
    }
    else if(playerChoice == "scissors"){

        switch(compChoice){
            case "rock":
                compScore += 1;
                break;
            case "paper":
                playerScore += 1;
        }
    }
    
}

let playerScore = 0;
let compScore = 0;

let compChoice = getComputerChoice();
console.log("comp choice: " + compChoice);
let playerChoice = getPlayerChoice();

playRound(playerChoice, compChoice);

console.log("player Score: " + playerScore);
console.log("Computer Score: " + compScore);
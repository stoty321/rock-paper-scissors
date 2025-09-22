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
    let resultCode = 0; // 0 = Draw | 1 = player loss | 2 = player win

    if (playerChoice == "rock"){
        
        switch(compChoice){
            case "paper":
                resultCode = 1;
                break;
            case "scissors":
                resultCode = 2;             
        }
    }
    else if(playerChoice == "paper"){

        switch(compChoice){
            case "scissors":
                resultCode = 1;
                break;
            case "rock":
                resultCode = 2;
        }
    }
    else if(playerChoice == "scissors"){

        switch(compChoice){
            case "rock":
                resultCode = 1;
                break;
            case "paper":
                resultCode = 2;               
        }
    }

    return resultCode;
    
}

function playGame(){
    let playerScore = 0;
    let compScore = 0;
    let round = 1;

    for (round; round <=5; round++){

        let compChoice = getComputerChoice();
        console.log("comp choice: " + compChoice);
        let playerChoice = getPlayerChoice();
        
        let resultCode = playRound(playerChoice, compChoice);

        switch(resultCode){
            case 0:
                console.log("Its a Draw");
                break;
            case 1:
                console.log("Player Loses");
                compScore++;
                break;
            case 2:
                console.log("Player Wins");
                playerScore++;
                break;
        }
        
        console.log("Round: " + round)
        console.log("Player Score: " + playerScore + " | Computer Score: " + compScore);
    }    
}

playGame();
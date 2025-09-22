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

function playGame(){
    let playerScore = 0;
    let compScore = 0;
    let round = 0;

    for (round; round <=5; round++){

        let compChoice = getComputerChoice();
        console.log("comp choice: " + compChoice);
        let playerChoice = getPlayerChoice();
        
        let playerWins = playRound(playerChoice, compChoice);

        if(playerWins == "true"){
            playerScore += 1;
        }else{
            compScore += 1;
        }
        
        console.log("Round: " + round)
        console.log("Player Score: " + playerScore + " | Computer Score: " + compScore);
    }    
}

playGame();
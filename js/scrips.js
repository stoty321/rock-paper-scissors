function getComputerChoice(){
    let choiceValue = Math.floor(Math.random() * 3);
    let choice = " ";

    if(choiceValue == 0){
        choice = "rock";
    }
    else if(choiceValue == 1){
        choice = "paper";
    }
    else if(choiceValue == 2){
        choice = "scissors";
    }
    
    return choice;
}

function getPlayerChoice(){
    let choiceValue = prompt("Enter 'rock', 'paper', or 'scissors'");
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
        let playerChoice = getPlayerChoice();
        let resultCode = playRound(playerChoice, compChoice);

        console.log("Round: " + round)

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

        console.log("Player Score: " + playerScore + " | Computer Score: " + compScore);
        console.log("_____________________________________");
    }

    gameWinner(playerScore, compScore);
}

function gameWinner(playerScore, compScore){
    
    if(playerScore > compScore){
        console.log("Congratulations. You Won the Game: " + playerScore + "-" + compScore);
    }
    else if(playerScore < compScore){
        console.log("Better luck next time. You lost the Game: " + playerScore + "-" + compScore);
    }else{
        console.log("So close. It's a Draw");
    }
}

playGame();
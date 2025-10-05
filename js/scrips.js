function getComputerChoice() {
    let choiceValue = Math.floor(Math.random() * 3);
    let choice = " ";

    if (choiceValue == 0) {
        choice = "rock";
    }
    else if (choiceValue == 1) {
        choice = "paper";
    }
    else if (choiceValue == 2) {
        choice = "scissors";
    }

    return choice;
}

function getPlayerChoice() {
    let choiceValue = prompt("Enter 'rock', 'paper', or 'scissors'");
    return choiceValue;
}

function playRound(playerChoice, compChoice) {

    playerChoice = playerChoice.toLowerCase();
    let resultCode = 0; // 0 = Draw | 1 = player loss | 2 = player win

    if (playerChoice == "rock") {

        switch (compChoice) {
            case "paper":
                resultCode = 1;
                break;
            case "scissors":
                resultCode = 2;
        }
    }
    else if (playerChoice == "paper") {

        switch (compChoice) {
            case "scissors":
                resultCode = 1;
                break;
            case "rock":
                resultCode = 2;
        }
    }
    else if (playerChoice == "scissors") {

        switch (compChoice) {
            case "rock":
                resultCode = 1;
                break;
            case "paper":
                resultCode = 2;
        }
    }

    return resultCode;

}

function playGame(playerChoice) {
    let playerScore = 0;
    let compScore = 0;

    const txtResult = document.querySelector(".txtResult");

    let compChoice = getComputerChoice();
    let resultCode = playRound(playerChoice, compChoice);

    switch (resultCode) {
        case 0:
            txtResult.textContent = "Its a Draw";
            break;
        case 1:
            txtResult.textContent = "Player Loses";
            compScore++;
            break;
        case 2:
            txtResult.textContent = "Player Wins";
            playerScore++;
            break;
    }

    //page.appendChild(txtResult);

    gameWinner(playerScore, compScore);
}

function gameWinner(playerScore, compScore) {

    if (playerScore > compScore) {
        console.log("Congratulations. You Won the Game: " + playerScore + "-" + compScore);
    }
    else if (playerScore < compScore) {
        console.log("Better luck next time. You lost the Game: " + playerScore + "-" + compScore);
    } else {
        console.log("So close. It's a Draw");
    }
}

function displayGame() {
    const btnRock = document.createElement("button");
    const btnPaper = document.createElement("button");
    const btnScissors = document.createElement("button");
    const page = document.querySelector("body");

    const containResults = document.createElement("div");

    const txtResult = document.createElement("p");
    txtResult.classList.add("txtResult");

    const txtScore = document.createElement("p");
    txtScore.classList.add("txtScore");

    page.appendChild(btnRock);
    btnRock.textContent = "Rock";
    page.appendChild(btnPaper);
    btnPaper.textContent = "Paper";
    page.appendChild(btnScissors);
    btnScissors.textContent = "Scissors";

    containResults.appendChild(txtResult)
    txtResult.textContent = `Choose Rock, Paper or Scissors`;
    containResults.appendChild(txtScore)
    txtScore.textContent = `Player Score: 0 | Computer Score: 0`;
    page.appendChild(containResults);

    const buttons = document.querySelectorAll("button");

    buttons.forEach((button) => {
        button.addEventListener("click", () => {
            let playerChoice = button.textContent;
            console.log(playerChoice);
            playGame(playerChoice);
        });
    });
}

displayGame();
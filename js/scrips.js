const Score = {
    player: 0,
    computer: 0,
};

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

    const txtResult = document.querySelector(".txtResult");
    const txtScore = document.querySelector(".txtScore");

    let compChoice = getComputerChoice();
    let resultCode = playRound(playerChoice, compChoice);

    switch (resultCode) {
        case 0:
            txtResult.textContent = "Its a Draw";
            break;
        case 1:
            txtResult.textContent = "Player Loses";
            Score.computer++;
            break;
        case 2:
            txtResult.textContent = "Player Wins";
            Score.player++;
            break;
    }

    txtScore.textContent = `Player Score: ${Score.player} | Computer Score: ${Score.computer}`;

    gameWinner();
}

function gameWinner() {

    if (Score.player > Score.computer) {
        console.log("Congratulations. You Won the Game: " + Score.player + "-" + Score.computer);
    }
    else if (Score.player < Score.computer) {
        console.log("Better luck next time. You lost the Game: " + Score.player + "-" + Score.computer);
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
    
            playGame(playerChoice);
        });
    });
}

displayGame();
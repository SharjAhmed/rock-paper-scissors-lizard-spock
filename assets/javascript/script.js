let choices = ["rock", "paper", "scissors", "lizard", "spock"];
let button = document.getElementById("button");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");

let player;
let computer;

//Loading player and computer choice images when page loads

window.onload = function () {
    for (let i = 0; i < 5; i++) {
        let choice = document.createElement("img");
        choice.id = choices[i];
        choice.src = "assets/images/" + choices[i] + ".png";
        choice.addEventListener("click", selectChoice);
        document.getElementById("choices").append(choice);
        console.log(i);
    }
};

//player choice
function selectChoice() {

    player = this.id;
    document.getElementById("player-choice").src = `assets/images/${player}.png`;

    //computer choice
    computer = choices[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").src = `assets/images/${computer}.png`;

    //Score and Message
    let parsedplayerScore = parseInt(playerScore.innerText);
    let parsedcomputerScore = parseInt(computerScore.innerText);
    let result = document.getElementById('result');


    //result check
    if (player == computer) {
        result.innerHTML = 'Draw!';
    }
    else {
        if (player == "rock") {
            if (computer == "scissors") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "lizard") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "paper") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "spock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "scissors") {
            if (computer == "paper") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "lizard") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "rock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "spock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }
        else if (player == "paper") {
            if (computer == "rock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "scissors") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "lizard") {
            if (computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "paper") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "scissors") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "rock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

        else if (player == "spock") {
            if (computer == "scissors") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "rock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win!';
            }
            else if (computer == "paper") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
            else if (computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose!';
            }
        }

    }

}
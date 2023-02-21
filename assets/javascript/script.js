let choices = ["rock", "paper", "scissors", "lizard", "spock"];
let button = document.getElementById("button");
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
let rules = document.getElementById("rules");
let span = document.getElementsByClassName("close")[0];

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
        choice.setAttribute("alt","choices[i]");
        console.log(i);
    }
};

//Player Choice
function selectChoice() {

    player = this.id;
    document.getElementById("player-choice").src = `assets/images/${player}.png`;

    //Computer Choice
    computer = choices[Math.floor(Math.random() * 5)];
    document.getElementById("computer-choice").src = `assets/images/${computer}.png`;

    //Score and Message
    let parsedplayerScore = parseInt(playerScore.innerText);
    let parsedcomputerScore = parseInt(computerScore.innerText);
    let result = document.getElementById('result');

    //Result Check
    if (player == computer) {
        result.innerHTML = 'Draw!';
    }
    else {
        if (player == "rock") {
            if (computer == "scissors") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Rock Crushes Scissors!';
            }
            else if (computer == "lizard") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Rock Crushes Lizard!';
            }
            else if (computer == "paper") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Paper Covers Rock!';
            }
            else if (computer == "spock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Spock Vaporizes Rock!';
            }
        }

        else if (player == "paper") {
            if (computer == "rock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Paper Covers Rock!';
            }
            else if (computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Paper Disproves Spock!';
            }
            else if (computer == "scissors") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Scissors Cuts Paper!';
            }
            else if (computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Lizard Eats Paper!';
            }
        }

        else if (player == "scissors") {
            if (computer == "paper") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Scissors Cuts Paper!';
            }
            else if (computer == "lizard") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Scissors Decapitates Lizard!';
            }
            else if (computer == "rock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Rock Crushes Scissors!';
            }
            else if (computer == "spock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Spock Smashes Scissors!';
            }
        }

        else if (player == "lizard") {
            if (computer == "spock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Lizard Poisons Spock!';
            }
            else if (computer == "paper") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Lizard Eats Paper!';
            }
            else if (computer == "scissors") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Scissors Decapitates Lizard!';
            }
            else if (computer == "rock") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Rock Crushes Lizard!';
            }
        }

        else if (player == "spock") {
            if (computer == "scissors") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Spock Smashes Scissors!';
            }
            else if (computer == "rock") {
                playerScore.innerText = ++parsedplayerScore;
                result.innerHTML = 'You Win! Spock Vaporizes Rock!';
            }
            else if (computer == "paper") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Paper Disproves Spock!';
            }
            else if (computer == "lizard") {
                computerScore.innerText = ++parsedcomputerScore;
                result.innerHTML = 'You Lose! Lizard Poisons Spock!';
            }
        }
    }
}

/*
Checking for overall game winner
First to 5 wins
*/
document.addEventListener("click", function () {
    if (parseInt(playerScore.innerText) >= 5) {
        winner("You");
    }
    else if (parseInt(computerScore.innerText) >= 5) {
        winner("Computer");
    }
});

function winner(who) {
    alert(`${who} won! 🥇 Click OK to play again`);
    document.getElementById("player-choice").src = `assets/images/logo-ready.png`;
    document.getElementById("computer-choice").src = `assets/images/logo-ready.png`;
    playerScore.innerText = 0;
    computerScore.innerText = 0;
    result.innerText = "Ready!";
}

/*Rules
To load upon button click
*/
button.onclick = function () {
    rules.style.display = "block";
};

span.onclick = function () {
    rules.style.display = "none";
};

window.onclick = function (event) {
    if (event.target == rules) {
        rules.style.display = "none";
    }
};
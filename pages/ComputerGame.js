let computerPlay = function () {
    let computer_choice_number = Math.floor(Math.random() * 3);
    let computerChoice;
    if (computer_choice_number === 0) {
        computerChoice = "rock";
    } else if (computer_choice_number === 1) {
        computerChoice = "paper";
    }
    else if (computer_choice_number === 2) {
        computerChoice = "scissors";
    }
    return computerChoice;
}

let user_score_increment_check = false, computer_score_increment_check = false;

function playRound(playerSelection, computerSelection) {
    let playerChoice = playerSelection.toLowerCase();
    if (playerChoice == "" || containsSpecialChars(playerChoice)){
        user_score_increment_check = "no";
        return "Sorry,I didn't catch your choice \n write one of the listed moves and try again \n-rock\n-paper\n-scissors";
    }

    if (playerChoice === computerSelection) {
        user_score_increment_check = true, computer_score_increment_check = true;
        return `your choice: ${playerChoice}      computer choice: ${computerSelection} \n\nTie! lets try again\n`;

    } else if (playerChoice == "rock") {
        if (computerSelection == "paper") {
            computer_score_increment_check = true;
            return `your choice: ${playerChoice}      computer choice: paper \n\nYou lose!, Paper beats Rock\n`;

        } else if (computerSelection == "scissors") {
            user_score_increment_check = true;
            return `your choice: ${playerChoice}      computer choice: scissors \n\nYou win!, Rock beats Scissors\n`;
        }
    }else if (playerChoice == "paper") {
        if (computerSelection == "rock") {
            user_score_increment_check = true;
            return `your choice: ${playerChoice}      computer choice: rock \n\nYou win!, Paper beats Rock\n`;
        } else if (computerSelection == "scissors") {
            computer_score_increment_check = true;
            return `your choice: ${playerChoice}      computer choice: scissors \n\nYou lose!, Scissors beats Paper\n`;
        }
    }

    else if (playerChoice == "scissors") {
        if (computerSelection == "rock") {
            computer_score_increment_check = true;
            return `your choice: ${playerChoice}      computer choice: rock \n\nYou lose!, Rock beats scissors\n`;
        } else if (computerSelection == "paper") {
            user_score_increment_check = true;
            return`your choice: ${playerChoice}      computer choice: paper \n\nYou win!, Scissors beats Paper\n`;
        }
    }
    else {
        user_score_increment_check = "no";
        return "Sorry,I didn't catch your choice \n write one of the listed moves and try again \n-rock\n-paper\n-scissors";
    }
}
function game() {
    let userScore = 0, computerScore = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Choose your move(rock or paper or scissors)", "rock");
        const computerSelection = computerPlay();
        if (playerSelection == null){
            if(confirm(`Do you wnat to quit the game?\n click cancel if you want to continue`) === true){
                return-1;
           }else{
            i--;
               continue;
           }  
        }
        playRound(playerSelection, computerSelection);
        if (user_score_increment_check == computer_score_increment_check ) {
            alert(playRound(playerSelection, computerSelection) + `\nyour score: ${userScore}    computer score: ${computerScore}`);
            i--;
            user_score_increment_check = false; computer_score_increment_check = false;
        } else if (user_score_increment_check == true) {
            userScore++;
            alert(playRound(playerSelection, computerSelection) + `\nyour score: ${userScore}    computer score: ${computerScore}`);
            user_score_increment_check = false;
        } else if (computer_score_increment_check == true) {
            computerScore++;
            alert(playRound(playerSelection, computerSelection) + `\nyour score: ${userScore}    computer score: ${computerScore}`);
            computer_score_increment_check = false;
        }else if (user_score_increment_check == "no"){
            alert (playRound(playerSelection, computerSelection));
            i--;
        }else{
            i--;
        }
    }
    if (userScore > computerScore) {
        alert(`Congratualtions \nYou win! \nFinal scors:\n you: ${userScore}     computer: ${computerScore}`);
    }
    else if (computerScore > userScore) {
        alert(`Gameover! You lose :( \nFinal scors:\n you: ${userScore}     computer: ${computerScore}`);
    }
}
function containsSpecialChars(name){
    const specialCharacter = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    return specialCharacter.test(name);
    }
function user(){
let userName = prompt(`what is your name?`, "Name");
if (userName == "Name" || userName == "name") {
    user();
} else if(containsSpecialChars(userName)){
alert(`Avoid writing the symbols please`);
user();
}else if( userName === null) {
//alert(`Welcome to Rock,Paper,scissors game with five rounds \nlet's start to paly :)`);
if(confirm(`Do you wnat to quit the game?\n click cancel if you want to continue`) === true){
     return-1;
}else{
    user();
}
}
else if (userName === ""){
    user();    
}
    alert(`Welcome ${userName} to Rock,Paper,scissors game with five rounds`);
    alert(`How to paly:\nChoose one of these moves and write on the text box:\nrock\npaper\nscissors\n\n- Rock wins against scissors.\n- Scissors win against paper.\n- Paper wins against rock.\n- If the choices are same then it would be tie and the round won't be counted.`)
    if(confirm(`let's start to paly :)`) === true){
        game();
    }else{
return-1;
    }
}


user();
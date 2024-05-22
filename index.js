const buttons = document.querySelectorAll("button");

const resultEl = document.getElementById("result");

const playerScoreEl = document.getElementById("user-score");

const computerScoreEl = document.getElementById("computer-score");

let playerScore = 0;
let computerScore = 0;

//get buttons id for each iteration
buttons.forEach((btn) => {
    btn.addEventListener('click', () => {
        const result= playround(btn.id,computerChoice())
        resultEl.textContent=result
    })

})

//get random computer choice
let computerChoice = () => {

    const choices = ["rock", "paper", "scissors"];
    let generateRandomNum = Math.floor(Math.random()*choices.length)
    return choices[generateRandomNum]
     

}

// playround

let playround = (playerSelection, computerSelection) => {
    if (playerSelection === computerSelection) {
        return `It's a tie!`
    }
    else if((playerSelection === "rock" && computerSelection === "scissors")||
           (playerSelection === "paper" && computerSelection === "rock") ||
           (playerSelection === "scissors" && computerSelection === "paper")
        )
        {
            playerScore++;
            playerScoreEl.textContent=playerScore;
            return `you win ${playerSelection} beats ${computerSelection}`;   

        } 
        else{
            computerScore++;
            computerScoreEl.textContent=computerScore;
            return `you lose! ${computerSelection} beats ${playerSelection}`;
        }
        }
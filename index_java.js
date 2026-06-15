function getComputerChoice () {

   let num = Math.floor(Math.random() * 9) + 1; 
   console.log(num)
   if (num <= 3){
    return("rock")
   }
   else if (num >= 4 && num <= 6){
    return("paper")
   }
   else{
    return("scissors")
   }

}

function getHumanChoice (){

    let hc = prompt("Choose: rock - paper - scissors", "your choice here").toLowerCase();

    if (hc === "rock"){
        console.log("you picked ROCK")
        return ("rock")
    }
    else if (hc === "paper"){
        console.log("you picked PAPER")
        return ("paper")
    }
    else if (hc === "scissors"){
        console.log("you picked SCISSORS")
        return ("scissors")
    }
    else if (hc !== "rock" || hc !== "paper" || hc !== "scissors") {
        console.log("try a valid option")
        return "null"
    }

}

let humanScore = 0
let computerScore = 0

function playRound (humanChoice, computerChoice) {
    if (humanChoice === null){
        console.log("Skipping this round. No valid choice was made.")
        return
    }

    if (humanChoice === computerChoice){
        console.log("That is a tie")
    }
    else if 
    ((humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "scissors" && computerChoice === "paper") ||
    (humanChoice === "paper" && computerChoice === "rock"))
    {
        
        console.log(`You win this round. ${humanChoice.charAt(0).toUpperCase()}${humanChoice.slice(1)} beats ${computerChoice}`)
        humanScore++
        console.log (humanScore, computerScore)
    }
    else {
        console.log(`You lose this round. ${humanChoice} beats ${computerChoice}`)
        computerScore++
        console.log (humanScore, computerScore)
    }
}


const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();
playRound (humanSelection, computerSelection);

const loop = 4
for (let i = 0; i  < loop; i++) {
    getComputerChoice()
    getHumanChoice()
    playRound()
}
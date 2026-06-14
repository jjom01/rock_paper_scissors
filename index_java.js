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
console.log(getComputerChoice())

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
    if (humanChoice === "rock" && computerChoice === "rock"){
        console.log("That is a tie")
        console.log (humanScore, computerScore)
    }
}

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound (humanSelection, computerSelection);
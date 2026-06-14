function getComputerChoice () {

   let num = Math.floor(Math.random() * 9) + 1; 
   console.log(num)
   if (num <= 3){
    console.log("rock")
   }
   else if (num >= 4 && num <= 6){
    console.log("paper")
   }
   else{
    console.log("scissors")
   }

}
getComputerChoice()

function getHumanChoice (){

    let hc = prompt("Choose: rock - paper - scissors", "your choice here").toLowerCase();

    if (hc === "rock"){
        console.log("you picked ROCK")
    }
    else if (hc === "paper"){
        console.log("you picked PAPER")
    }
    else if (hc === "scissors")
        console.log("you picked SCISSORS")
    else if (hc !== "rock" || hc !== "paper" || hc !== "scissors") {
        console.log("try a valid option")
    }

}
getHumanChoice()

let humanScore = 0
let computerScore = 0
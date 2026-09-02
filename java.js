function getComputerChoice () {
    let num = Math.floor(Math.random() * 9) + 1; 
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

let buttons = document.querySelectorAll('.button');

buttons.forEach(btn =>{
btn.addEventListener('click', (event) => {
    const computerChoice = getComputerChoice()
    if (event.target.id === 'rock') {
        console.log('Computer chose:', computerChoice);
        console.log('User chose:', event.target.id);
        } 
    else if (event.target.id === 'paper') {
        console.log('Computer chose:', computerChoice);
        console.log('User chose:', event.target.id);
        } 
    else if (event.target.id === 'scissors') {
        console.log('Computer chose:', computerChoice);
        console.log('User chose:', event.target.id);
        }

    if
    ((event.target.id === 'rock' && computerChoice === 'scissors') ||
    (event.target.id === 'paper' && computerChoice === 'rock') ||
    (event.target.id === 'scissors' && computerChoice === 'paper')){
        console.log("Victory. Human chose", event.target.id, "over CPU's", computerChoice)
    }
    else if (event.target.id === computerChoice){
        console.log ("That is a tie")
    }
    else {
        console.log ('You lose. CPU chose', computerChoice, "over human's", event.target.id)
    }
    })
})
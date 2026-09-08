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

let buttons = document.querySelectorAll('.button');
let msgWTL = document.querySelector('.player_info');

const msg = document.createElement('p');

buttons.forEach(btn =>{
btn.addEventListener('click', (event) => {
    const computerChoice = getComputerChoice()
    if
    ((event.target.id === 'rock' && computerChoice === 'scissors') ||
    (event.target.id === 'paper' && computerChoice === 'rock') ||
    (event.target.id === 'scissors' && computerChoice === 'paper')){
        msg.id = 'win'
        msg.textContent = `You win this one, ${event.target.id} beats ${computerChoice}.`;
        msg.style.fontFamily = 'PP Fraktion Mono', 'monospace';
        msg.style.textAlign = 'center'
        msgWTL.appendChild(msg);
        console.log("Victory. Human chose", event.target.id, "over CPU's", computerChoice)
    }
    else if (event.target.id === computerChoice){
        msg.id = 'tie'
        msg.textContent = "That is a tie";
        msg.style.fontFamily = 'PP Fraktion Mono', 'monospace';
        msg.style.textAlign = 'center'
        msgWTL.appendChild(msg);
        console.log ("That is a tie")
    }
    else {
        msg.id = 'lose'
        msg.textContent = `You lost this one, ${computerChoice} beats ${event.target.id}.`;
        msg.style.fontFamily = 'PP Fraktion Mono', 'monospace';
        msg.style.textAlign = 'center'
        msgWTL.appendChild(msg);
        console.log ('You lose. CPU chose', computerChoice, "over human's", event.target.id)
    }

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
    })
})
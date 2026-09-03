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
let msgWTL = document.querySelector('.player_track')

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
        const msgW = document.createElement('p');
        msgW.textContent = `You win this one, ${event.target.id} beats ${computerChoice}.`;
        msgW.style.fontFamily = 'PP Fraktion Mono', 'monospace';
        msgWTL.appendChild(msgW);
        console.log("Victory. Human chose", event.target.id, "over CPU's", computerChoice)
    }
    else if (event.target.id === computerChoice){
        const msgT = document.createElement('p');
        msgT.textContent = "That is a tie";
        msgT.style.fontFamily = 'PP Fraktion Mono', 'monospace';
        msgWTL.appendChild(msgT);
        console.log ("That is a tie")
    }
    else {
        console.log ('You lose. CPU chose', computerChoice, "over human's", event.target.id)
    }
    })
})
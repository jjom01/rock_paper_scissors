let buttons = document.querySelectorAll('.button');
let msgWTL = document.querySelector('.player_info');
const HumanScore = document.querySelector('#h_score');
const PcScore = document.querySelector('#pc_score');
let HumanScoreCount = 0
let PcScoreCount = 0
const p_name = document.querySelector('.player_name');
const msg = document.createElement('p');

msg.style.color = 'rgb(239, 230, 216)'
msg.style.fontFamily = '"PP Fraktion Mono", monospace';
msg.style.textAlign = 'center'
msg.style.backgroundColor = 'black';

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

function getUserName (){
    let userName = prompt ("What is your name?", "|");
    p_name.textContent = userName;
}

buttons.forEach(btn =>{
btn.addEventListener('click', (event) => {
    const computerChoice = getComputerChoice()
    if
    ((event.target.id === 'rock' && computerChoice === 'scissors') ||
    (event.target.id === 'paper' && computerChoice === 'rock') ||
    (event.target.id === 'scissors' && computerChoice === 'paper')){
        HumanScoreCount++;
        HumanScore.textContent = `😃 score: ${HumanScoreCount}`;
        msg.textContent = `You win this one, ${event.target.id} beats ${computerChoice}.`;
        msgWTL.appendChild(msg);
        console.log("Victory. Human chose", event.target.id, "over CPU's", computerChoice)
    }
    else if (event.target.id === computerChoice){
        msg.textContent = "That is a tie";
        msgWTL.appendChild(msg);
        console.log ("That is a tie")
    }
    else {
        PcScoreCount++;
        PcScore.textContent =`👾 score: ${PcScoreCount}`;
        msg.textContent = `You lost this one, ${computerChoice} beats ${event.target.id}.`;
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

const new_p_name = getUserName();
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

buttons.forEach(btn =>{
btn.addEventListener('click', (event) => {
    if (event.target.id === 'rock') {
        const computerChoice = getComputerChoice();
        console.log('Computer chose:', computerChoice);
        console.log('rock was clicked');
        } 
    else if (event.target.id === 'paper') {
        const computerChoice = getComputerChoice();
        console.log('Computer chose:', computerChoice);
        console.log('paper was clicked');
        } 
    else if (event.target.id === 'scissors') {
        const computerChoice = getComputerChoice();
        console.log('Computer chose:', computerChoice);
        console.log('scissors was clicked');
        }
    })
})
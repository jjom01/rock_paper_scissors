let buttons = document.querySelectorAll('.button');

buttons.forEach(btn =>{
    btn.addEventListener('click', (event) => {
        if (event.target.id === 'rock') {
        console.log('rock was clicked');
    } else if (event.target.id === 'paper') {
        console.log('paper was clicked');
    } else if (event.target.id === 'scissors') {
        console.log('scissors was clicked');
    }
    })
})
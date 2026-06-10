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

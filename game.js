
//Genereate number for player to guess
function generateRandomNumber()
{
    return Math.floor(Math.random() * 100) + 1
}
console.log(generateRandomNumber())

function getPlayerGuess(){
    let isValid = false
    let guess
    let number 
    while (!isValid){

    number = prompt("Please enter a number from 1 to 100:");

     if (isNaN(number)){
        console.log("Try again")
     }
     else if (number > 100 || number < 0 || number === ""){
        console.log("Try again")
     }
     else{
        return number
        break
     }
 
    }
}
console.log(getPlayerGuess())


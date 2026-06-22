
//Genereate number for player to guess
function generateRandomNumber()
{
    return Math.floor(Math.random() * 100) + 1
}
console.log(generateRandomNumber())
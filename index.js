// var readlineSync = require("readline-sync")

// var chalk = require("chalk")

// var userName = readlineSync.question("What is your name? ")

// console.log(chalk.blue("Welcome ") + chalk.white(userName))
// console.log(chalk.blue("Welcome ") + chalk.gray(userName))


var readlineSync = require("readline-sync")
var chalk = require("chalk")
var score = 0
var userName = readlineSync.question("What is your name? ")

console.log("Welcome! " + userName )
console.log("\nDo you love", chalk.bold ("MONEY"),chalk.bold.bgRed ("HEIST"), "series?")
console.log("Let's have quiz on that.")


function play(question,answer) {
  var userAnswer = readlineSync.question(question)

  if ( userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("You entered " + userAnswer )
    console.log(chalk.bgGreen.white("You are right! "))
    score = score + 1
  }else{
    console.log("You entered " + userAnswer )
    console.log(chalk.bgRed.white("You are wrong! "))
  }
  console.log("Your current score is " + score)
  console.log("--------------")
}

var questions = [{
  question : "\n Q-1. How many seasons are there in money heist series? \n A.3\t B.4\t C.5 \t D.6  \nYour answer - ",
  answer : "C"
},{
  question : " Q-2. Who is the master mind of the HEIST \nA.Tokyo\t B.Professor\t C.Rio \t D.Denver  \nYour answer -  "  ,
  answer : "B"
},{
  question : " Q-3. Who is the master in computer and hacking? \nA.Tokyo\t B.Professor\t C.Rio \t D.Denver  \nYour answer -  ",
  answer : "C"
},{
  question : " Q-4. What was the target of money they were going to heist ?  \nA.1.2 Billoin \t B.1.4 Billion \t C.2.2 BIllion  \t D.2.4 Billion  \nYour answer -  ",
  answer : "D"
},{
   question : " Q-5. Who is the incharge of the heist outside the bank ?  \nA.Berlin \t B.Professor \t C.Gandia  \t D.Helsinki  \nYour answer -  ",
  answer : "B"
},{
   question : " Q-6. What is the real name of professor in the series ?  ?  \nA.Salva \t B.Sergio \t C.Salvador  \t D.None of the above  \nYour answer -  ",
  answer : "B"
},{
  question : " Q-7. Money Heist in shooted in which country ?  \nA.Spain \t B.Germany \t C.Italy  \t D.USA  \nYour answer -  ",
  answer : "A"
},{
  question : " Q-8. The color of the suit they are using in the heist is ?  \nA.Brown \t B.Black \t C.Red  \t D.Yellow  \nYour answer -  ",
  answer : "C"
},{
  question : " Q-9. How many hostages are there in the first Heist ?   \nA.167 \t B.267 \t C.367  \t D.467  \nYour answer -  ",
  answer : "C"
},{
  question : " Q-10. Who is the most hated character omong these ?  \nA.Arturo Roman \t B.Allison Parkar \t C.Gandia  \t D.Palermo.  \nYour answer -  ",
  answer : "A"
}]

for (var i=0 ; i<questions.length ; i++) {
  var currentQuestion = questions[i]
  play(currentQuestion.question,currentQuestion.answer)
}


if ( score > 7) { 
  console.log(chalk.bgBlackBright("Congratulations! " + "you scored " + score))
}else{
  console.log("Your total score is " + score)
}

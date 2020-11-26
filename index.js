var readlineSync = require('readline-sync');
const chalk = require('chalk');

//question array list

var quesList = [{
  question: chalk.hex('#BDBDBD')("Name the SuperHero with No super Powers?\n1. Thor\n2. BatMan\n3. Hulk\n4. None\n"),
  answer: 2
},

{
  question: chalk.hex('#BDBDBD')("Who is the first singer, reached  million followers on Twitter?\n1. Lady Gaga\n2. AR Rehman\n3. Arijit Singh\n4. All of the above\n"),
  answer: 1
},

{
  question: chalk.hex('#BDBDBD')("In Web series FRIENDS, who amoung them is vegetarian?\n1. Ross\n2. Joey\n3. Chandler\n4. Phoebe\n"),
  answer: 4
}
,{
  question: chalk.hex('#BDBDBD')("Who is the Founder of Google?\n1. larry Page\n2. Sergey Brin\n3. Both\n4. None of the above\n"),
  answer: 3
},{
  question:chalk.hex('#BDBDBD')("Name of the Space AirCraft Company Founded by Elon Musk?\n1. Galaxy X\n2. Star X\n3. Space X\n4. None\n"),
  answer: 3
}];

//DRIVER PROGRAM

var userName = readlineSync.question("Enter your Name: ");
console.log(chalk.bgCyan("Welcome!! " +userName+ " To the Funniest Trivia Game Ever.\n"));
console.log(chalk.bgRed("Instructions"));
console.log(chalk.black.bgWhite.bold("\nOnly use option no. corresponding to your answer.\n"));

var score = [];
function quizGame(quesObject){
  var gameScore = 0;
  
  for(i=0;i<quesObject.length;i++){
    var userAns = readlineSync.question(quesObject[i].question);
    if(userAns == quesObject[i].answer){
      gameScore = gameScore+1;
      console.log(chalk.bold.hex('#3485e4')("Correct Answer!!"));
    }else{
      console.log(chalk.bold.red("Sad! wrong answer, but you can surely try again"));
    }
    console.log("------------------------------");
  }
  score.push(gameScore);
  console.log(chalk.hex('#009688')("Thanks for playing: ",chalk.white.bgCyan.bold(userName)));
  console.log(chalk.hex('#009688')("your score is: "+gameScore+"/"+quesList.length));
  var max = score.reduce(function(a, b) {
    return Math.max(a, b);
  });
  console.log(chalk.green("your highest score is: "+ max + "🎊🎉"));

  var playAgain = readlineSync.question(chalk.black.bgWhite.bold("Want to play again?  [y/n] \n"));
  if(playAgain == "y"){
    quizGame(quesObject);
  }else{
    console.log("see you soon, Thanks for playing 🔰 ");
  }
}

//game calling function
quizGame(quesList);



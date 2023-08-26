const readline = require('readline');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

const guessNumber = getRandomInt(1, 10);

rl.question("Guess a number between 1 and 10: ", function(userInput) {
  const userGuess = parseInt(userInput);

  if (userGuess === guessNumber) {
    console.log("Good Work");
  } else {
    console.log("Not matched");
  }

  rl.close();
});

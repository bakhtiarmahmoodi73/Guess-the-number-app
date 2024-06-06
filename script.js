const randomNumber = Math.ceil(Math.random() * 100);
let numberOfGeuss = 0;

console.log(randomNumber);

const validateNumber = (value) => {
  if (isNaN(value)) {
    return "please enter a valid number ";
  } else if (+value < 1 || +value > 100) {
    return "please enter a number between 1 to 100";
  }
};

const checkGuess = (guess) => {
  numberOfGeuss++;
  console.log(numberOfGeuss);

  if (guess === randomNumber) {
    console.log("you geussed correctly.");
  } else if (guess < randomNumber) {
    console.log("Too low! Try again.");
    play();
  } else {
    console.log("Too high! Try again.");
    play();
  }
};

const play = () => {
  const number = prompt("Enter a number between 1 to 100");
  if (number === null) {
    return;
  }
  if (numberOfGeuss >= 10) {
    console.log("Game Over!");
    return;
  }

  const validation = validateNumber(number);
  if (validation) {
    console.log(validation);
    return play();
  }

  checkGuess(+number);
};

play();

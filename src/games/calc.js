import {
  userName,
  makeQuestion,
  errorAnswer,
  getAnswer,
  getRandomNumber,
  question,
  correctAnswer,
  congrats,
} from '../index.js';

const getRandomOption = () => {
  const arrayOfOptions = ['+', '-', '*'];
  const randomItem = arrayOfOptions[Math.floor(Math.random() * arrayOfOptions.length)];
  return randomItem;
};

const brainCalc = () => {
  let rightAnswer = 0;
  let sum = 0;
  const rounds = 3;
  const name = userName();
  makeQuestion('What is the result of the expression?');
  for (let i = 0; i < rounds; i += 1) {
    const randomOption = getRandomOption();
    const randomNumber = getRandomNumber(1, 10);
    const secondRandomNumber = getRandomNumber(1, 10);
    const numberStr = `${randomNumber} ${randomOption} ${secondRandomNumber}`;
    question(numberStr);
    const ans = parseInt(getAnswer(), 10);
    if (randomOption === '+') {
      sum = randomNumber + secondRandomNumber;
      if (sum !== ans) {
        errorAnswer(ans, name, sum);
        return;
      }
      if (sum === ans) {
        correctAnswer();
        rightAnswer += 1;
      }
    } else if (randomOption === '-') {
      sum = randomNumber - secondRandomNumber;
      if (sum !== ans) {
        errorAnswer(ans, name, sum);
        return;
      }
      if (sum === ans) {
        correctAnswer();
        rightAnswer += 1;
      }
    } else if (randomOption === '*') {
      sum = randomNumber * secondRandomNumber;
      if (sum !== ans) {
        errorAnswer(ans, name, sum);
        return;
      }
      if (sum === ans) {
        correctAnswer();
        rightAnswer += 1;
      }
    }
  }

  congrats(rightAnswer, name);
};

export default brainCalc;

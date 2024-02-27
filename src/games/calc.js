import { getRandomNumber, startGame } from '../index.js';

const getRandomOption = () => {
  const arrayOfOptions = ['+', '-', '*'];
  const randomOption = arrayOfOptions[Math.floor(Math.random() * arrayOfOptions.length)];
  return randomOption;
};

const expression = (num1, num2, option) => {
  switch (option) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operand: '${option}'!`);
  }
};

const runBrainCalc = () => {
  const randomOption = getRandomOption();
  const randomNumber = getRandomNumber(1, 10);
  const secondRandomNumber = getRandomNumber(1, 10);
  const question = `${randomNumber} ${randomOption} ${secondRandomNumber}`;
  const answer = `${expression(randomNumber, secondRandomNumber, randomOption)}`;
  return [question, answer];
};

export default () => {
  const rules = 'What is the result of the expression?';
  return startGame(runBrainCalc, rules);
};

import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const arrayOfOperators = ['+', '-', '*'];

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

const generateRoundCalculator = () => {
  const operation = arrayOfOperators[getRandomNumber(0, arrayOfOperators.length - 1)];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${operation} ${number2}`;
  const answer = expression(number1, number2, operation).toString();
  return [question, answer];
};

export default () => {
  const description = 'What is the result of the expression?';
  return startGame(generateRoundCalculator, description);
};

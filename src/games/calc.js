import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

const expression = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error(`Unknown operand: '${operator}'!`);
  }
};

const generateRound = () => {
  const operation = operators[getRandomNumber(0, operators.length - 1)];
  const number1 = getRandomNumber(1, 10);
  const number2 = getRandomNumber(1, 10);
  const question = `${number1} ${operation} ${number2}`;
  const answer = expression(number1, number2, operation).toString();
  return [question, answer];
};

export default () => {
  const description = 'What is the result of the expression?';
  return startGame(generateRound, description);
};

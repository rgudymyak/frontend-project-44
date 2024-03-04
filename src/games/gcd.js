import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const getGcd = (num1, num2) => {
  if (num2 > num1) return getGcd(num2, num1);
  if (!num2) return num1;
  return getGcd(num2, num1 % num2);
};

const generateRound = () => {
  const number1 = getRandomNumber(1, 100);
  const number2 = getRandomNumber(1, 100);
  const question = `${number1} ${number2}`;
  const answer = `${getGcd(number1, number2)}`;
  return [question, answer];
};

export default () => {
  const description = 'Find the greatest common divisor of given numbers.';
  return startGame(generateRound, description);
};

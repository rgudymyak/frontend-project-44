import { getRandomNumber, startGame } from '../index.js';

const nod = (num1, num2) => {
  if (num2 > num1) return nod(num2, num1);
  if (!num2) return num1;
  return nod(num2, num1 % num2);
};

const runGcd = () => {
  const randomNumber = getRandomNumber(1, 100);
  const secondRandomNumber = getRandomNumber(1, 100);
  const question = `${randomNumber} ${secondRandomNumber}`;
  const answer = nod(randomNumber, secondRandomNumber);
  return [question, answer];
};

export default () => {
  const rules = 'Find the greatest common divisor of given numbers.';
  return startGame(runGcd, rules);
};

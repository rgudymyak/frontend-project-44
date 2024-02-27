import { getRandomNumber, startGame } from '../index.js';

const isEven = (num) => num % 2 === 0;

const runIsEven = () => {
  const randomNumber = getRandomNumber(1, 10);
  const question = `${randomNumber}`;
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if the number is even, otherwise answer "no".';
  return startGame(runIsEven, rules);
};

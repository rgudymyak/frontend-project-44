import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const isEven = (num) => num % 2 === 0;

const generateRound = () => {
  const randomNumber = getRandomNumber(1, 10);
  const question = randomNumber.toString();
  const answer = isEven(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if the number is even, otherwise answer "no".';
  return startGame(generateRound, description);
};

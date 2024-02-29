import { startGame } from '../index.js';
import { getRandomNumber } from '../utils.js';

const isPrime = (n) => {
  if (n <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(n); i += 1) {
    if (n % i === 0) {
      return false;
    }
  }

  return true;
};

const generateRoundIsPrime = () => {
  const randomNumber = getRandomNumber(1, 10);
  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(generateRoundIsPrime, description);
};

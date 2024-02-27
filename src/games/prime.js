import { getRandomNumber, startGame } from '../index.js';

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i += 1) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
};

const runIsPrime = () => {
  const randomNumber = getRandomNumber(1, 10);
  const question = `${randomNumber}`;
  const answer = isPrime(randomNumber) ? 'yes' : 'no';
  return [question, answer];
};

export default () => {
  const rules = 'Answer "yes" if given number is prime. Otherwise answer "no".';
  return startGame(runIsPrime, rules);
};

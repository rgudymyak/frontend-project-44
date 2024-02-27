import { getRandomNumber, startGame } from '../index.js';

const isPrime = (n) => {
  if (n < 1) {
    return false;
  }

  if (n === 2 || n === 3) {
    return true;
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return false;
  }

  const sqrt = Math.sqrt(n);

  for (let i = 5; i <= sqrt; i += 6) {
    if (n % i === 0) {
      return false;
    }
  }

  for (let i = 7; i <= sqrt; i += 6) {
    if (n % i === 0) {
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

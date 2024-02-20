import {
  userName,
  makeQuestion,
  errorAnswer,
  getAnswer,
  getRandomNumber,
  question,
  correctAnswer,
  congrats,
} from '../index.js';

const isPrime = (n) => {
  if (n < 1) {
    return 'error';
  }

  if (n === 2 || n === 3) {
    return 'Prime';
  }

  if (n % 2 === 0 || n % 3 === 0) {
    return 'Composite';
  }

  // the divisors of a number cannot be greater than its square root.
  const sqrt = Math.sqrt(n);

  for (let i = 5; i <= sqrt; i += 6) {
    if (n % i === 0) {
      return 'Composite';
    }
  }

  for (let i = 7; i <= sqrt; i += 6) {
    if (n % i === 0) {
      return 'Composite';
    }
  }

  return 'Prime';
};

const prime = () => {
  let rightAnswer = 0;
  const rounds = 3;
  const name = userName();
  makeQuestion('Answer "yes" if given number is prime. Otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 10);
    question(randomNumber);
    const ans = getAnswer();
    if (isPrime(randomNumber) === 'Prime' && ans.toLowerCase() === 'yes') {
      correctAnswer();
      rightAnswer += 1;
    } else if (isPrime(randomNumber) === 'Composite' && ans.toLowerCase() === 'no') {
      correctAnswer(0);
      rightAnswer += 1;
    } else {
      errorAnswer(ans, name);
      return;
    }
  }
  congrats(rightAnswer, name);
};

export default prime;

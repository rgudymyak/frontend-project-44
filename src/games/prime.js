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

// === More readable ===
/**
 * Preliminary checks:
 *
 * Checks whether the number n is less than or
 * equal to 1. If so, the function returns an
 * error.
 * It checks whether n is equal to 2 or 3. If it
 * is, the number is considered prime.
 * Checking for divisibility by 2 and 3:
 *
 * It checks whether the number n is divisible by
 * 2 or 3. If it is divisible, the number is said
 * to be composite.
 * Checking for divisibility by 6k ± 1:
 *
 * An optimised approach is used to check
 * division by numbers of the form 6k ± 1 (except
 * 2 and 3), which reduces the number of
 * divisions.
 */

const isPrime = (n) => {
  if (n <= 1) {
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
    } else if (
      isPrime(randomNumber) === 'Composite' &&
      ans.toLowerCase() === 'no'
    ) {
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

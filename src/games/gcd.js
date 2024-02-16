import {
  userName,
  makeQuestion,
  getRandomNumber,
  question,
  getAnswer,
  correctAnswer,
  errorAnswer,
  congrats,
} from '../index.js';

const nod = (num1, num2) => {
  if (num2 > num1) return nod(num2, num1);
  if (!num2) return num1;
  return nod(num2, num1 % num2);
};

const gcd = () => {
  let rightAnswer = 0;
  const rounds = 3;
  const name = userName();
  makeQuestion('Find the greatest common divisor of given numbers.');
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 100);
    const secondRandomNumber = getRandomNumber(1, 100);
    const numOfNod = nod(randomNumber, secondRandomNumber);
    const str = `${randomNumber} ${secondRandomNumber}`;
    question(str);
    const ans = parseInt(getAnswer(), 10);
    if (ans === numOfNod) {
      rightAnswer += 1;
      correctAnswer();
    } else {
      errorAnswer(ans, name, numOfNod);
      return;
    }
  }
  congrats(rightAnswer, name);
};

export default gcd;

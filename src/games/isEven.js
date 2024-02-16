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

const isEven = () => {
  let rightAnswer = 0;
  const rounds = 3;
  const name = userName();
  makeQuestion('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < rounds; i += 1) {
    const randomNumber = getRandomNumber(1, 10);
    question(randomNumber);
    const ans = getAnswer();
    if (randomNumber % 2 === 0 && ans === 'no') {
      errorAnswer(ans, name);
      return;
    }
    if (randomNumber % 2 !== 0 && ans === 'yes') {
      errorAnswer(ans, name);
      return;
    }
    if (ans !== 'yes' && ans !== 'no') {
      errorAnswer(ans, name);
      return;
    }
    if (randomNumber % 2 === 0 && ans === 'yes') {
      rightAnswer += 1;
      correctAnswer();
    } else if (randomNumber % 2 !== 0 && ans === 'no') {
      rightAnswer += 1;
      correctAnswer();
    }
  }
  congrats(rightAnswer, name);
};

export default isEven;

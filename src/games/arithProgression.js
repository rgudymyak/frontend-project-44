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

const arithProgression = () => {
  const randomLength = getRandomNumber(5, 10);
  let randomNumber = getRandomNumber(1, 10);
  const randomNum = getRandomNumber(1, 5);
  const arr = [];
  arr.push(randomNumber);
  for (let i = 1; i < randomLength; i += 1) {
    randomNumber += randomNum;
    arr.push(randomNumber);
  }
  return arr;
};

const arithProgressionGame = () => {
  let rightAnswer = 0;
  const rounds = 3;
  const name = userName();
  makeQuestion('What number is missing in the progression?');
  for (let i = 0; i < rounds; i += 1) {
    const arr = arithProgression();
    const randomIndex = Math.floor(Math.random() * arr.length);
    const idx = arr.splice(randomIndex, 1, '..');
    question(arr);
    const ans = parseInt(getAnswer(), 10);
    if (ans === parseInt(idx, 10)) {
      correctAnswer();
      rightAnswer += 1;
    } else {
      errorAnswer(ans, name, idx);
      return;
    }
  }
  congrats(rightAnswer, name);
};

export default arithProgressionGame;

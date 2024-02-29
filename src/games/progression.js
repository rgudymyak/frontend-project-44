import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const generateProgression = (length, firstNumber, step) => {
  let number = firstNumber;
  const arr = [];
  for (let i = 1; i < length; i += 1) {
    number += step;
    arr.push(number);
  }
  return arr;
};

const generateRoundArithProgression = () => {
  const progressionLength = getRandomNumber(6, 10);
  const firstNumber = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const progression = generateProgression(progressionLength, firstNumber, step);
  const randomIndex = getRandomNumber(0, progression.length - 1);
  const answer = progression[randomIndex].toString();
  progression[randomIndex] = '..';
  const question = progression.join(' ');
  return [question, answer];
};

export default () => {
  const description = 'What number is missing in the progression?';
  return startGame(generateRoundArithProgression, description);
};

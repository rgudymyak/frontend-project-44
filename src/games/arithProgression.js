import { getRandomNumber, startGame } from '../index.js';

const arithProgression = (randomLength, randomNumber, randomStep) => {
  const arr = [];
  arr.push(randomNumber);
  for (let i = 1; i < randomLength; i += 1) {
    randomNumber += randomStep;
    arr.push(randomNumber);
  }
  return arr;
};

const runArithProgressionGame = () => {
  const randomLength = getRandomNumber(5, 10);
  const randomNumber = getRandomNumber(1, 10);
  const randomStep = getRandomNumber(1, 5);
  const arr = arithProgression(randomLength, randomNumber, randomStep);
  const randomIndex = Math.floor(Math.random() * arr.length);
  const answer = `${arr[randomIndex]}`;
  arr[randomIndex] = '..';
  const question = arr.join(' ');
  return [question, answer];
};

export default () => {
  const rules = 'What number is missing in the progression?';
  return startGame(runArithProgressionGame, rules);
};

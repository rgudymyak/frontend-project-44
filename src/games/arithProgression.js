import { getRandomNumber, startGame } from '../index.js';

const arithProgression = (randomLength, randomNumber, randomStep) => {
  let number = randomNumber;
  const arr = [];
  for (let i = 1; i < randomLength; i += 1) {
    number += randomStep;
    arr.push(number);
  }
  return arr;
};

const runArithProgressionGame = () => {
  const randomLength = getRandomNumber(6, 10);
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

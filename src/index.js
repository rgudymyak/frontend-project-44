import readlineSync from 'readline-sync';

export const userName = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  return name;
};

export const getAnswer = () => {
  const ans = readlineSync.question('Your answer: ');
  return ans;
};

export const errorAnswer = (ans, name, sum) => {
  if (typeof ans === 'string') {
    console.log(`${ans} is wrong answer ;(. Correct answer was "no".
    Let's try again, ${name}!`);
  } else if (typeof ans === 'number') {
    console.log(`${ans} is wrong answer ;(. Correct answer was ${sum}.
    Let's try again, ${name}!`);
  }
};

export const correctAnswer = () => {
  console.log('Correct!');
};

export const makeQuestion = (q) => {
  console.log(q);
};

export const question = (value) => {
  console.log(`Question: ${value}`);
};

export const getRandomNumber = (min, max) => {
  const randomNumber = Math.floor(Math.random() * (max - min + 1) + min);
  return randomNumber;
};

export const congrats = (rightAnswer, name) => {
  if (rightAnswer === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

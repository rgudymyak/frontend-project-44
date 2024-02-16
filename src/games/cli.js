import readlineSync from 'readline-sync';

const nameQuestion = () => {
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default nameQuestion;

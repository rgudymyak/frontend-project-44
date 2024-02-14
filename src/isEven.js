import readlineSync from 'readline-sync';

const isEven = () => {
  const arrOfNumber = [10, 7, 5];
  let sumRightAnswers = 0;
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  /* eslint-disable-next-line */
  for (const num of arrOfNumber) {
    console.log(`Question: ${num}`);
    const q = readlineSync.question('Your answer: ');
    if (num % 2 === 0 && q === 'no') {
      console.log(`${q} is wrong answer ;(. Correct answer was "yes".
      Let's try again, ${name}!`);
      return;
    }
    if (num % 2 !== 0 && q === 'yes') {
      console.log(`${q} is wrong answer ;(. Correct answer was "no".
       Let's try again, ${name}!`);
      return;
    }
    if (q !== 'yes' && q !== 'no') {
      console.log(`${q} is wrong answer ;(.
     Let's try again, ${name}!`);
      return;
    }
    if (num % 2 === 0 && q === 'yes') {
      sumRightAnswers += 1;
      console.log('Correct!');
    } else if (num % 2 !== 0 && q === 'no') {
      sumRightAnswers += 1;
      console.log('Correct!');
    }
  }
  if (sumRightAnswers === 3) {
    console.log(`Congratulations, ${name}`);
  }
};

export default isEven;

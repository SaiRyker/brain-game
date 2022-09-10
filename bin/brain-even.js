import readlineSync from 'readline-sync';
// eslint-disable-next-line import/extensions

const isEven = (number) => number % 2 === 0;

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

const firstQuestion = 'Answer "yes" if the number is even, otherwise answer "no".';

const main = () => {
  let count = 0;
  console.log(firstQuestion);
  while (count !== 3) {
    const number = getRandomInt(0, 100);
    console.log(`Question: ${number}`);
    const answer = readlineSync.question('Your answer: ');
    const even = isEven(number);
    if (even === true) {
      if (answer === 'yes') {
        console.log('Correct!');
        count += 1;
      } else if (answer === 'no') {
        console.log('\'no\' is wrong answer ;(. Correct answer was \'yes\'. \nLet\'s try again, ');
        break;
      }
    } else if (even === false) {
      if (answer === 'no') {
        console.log('Correct!');
        count += 1;
      } else if (answer === 'yes') {
        console.log('\'yes\' is wrong answer ;(. Correct answer was \'no\'. \nLet\'s try again, ');
        break;
      }
    }
  }
  if (count === 3) {
    console.log('Congratulations, !');
  }
};

main();

export default main;

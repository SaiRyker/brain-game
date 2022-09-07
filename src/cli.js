import readlineSync from 'readline-sync';

const greetings = () => {
  console.log("Welcome to the Brain Games!");
  const nickname = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nickname}!`);
}

export default greetings;

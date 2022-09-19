import getRandomInt from "../getRandomIntFunc.js";
import generalProcess from "../index.js";
// eslint-disable-next-line import/extensions

const isEven = (number) => number % 2 === 0;

const instruction = 'Answer "yes" if the number is even, otherwise answer "no".';

const mainLogic = () => {
	const number = getRandomInt(0, 100);
	const question = `Question: ${number}`;
	const even = isEven(number);
	let correct = '';
	if (even === true) {
		correct = 'yes';
	} else {
		correct = 'no'
	}
	return [question, correct];
};

const main = () => generalProcess(instruction, mainLogic);

export default main;

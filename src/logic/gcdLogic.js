import getRandomInt from '../getRandomIntFunc.js';
import generalProcess from "../index.js";

const instructions = 'Find the greatest common divisor of given numbers.';

const nod = (num1, num2) => {
	let temp1 = num1;
	let temp2 = num2;
	do {
		if (temp1 > temp2) {
			temp1 = temp1 % temp2;
		} else {
			temp2 = temp2 % temp1;
		}
	} while ((temp1 != 0) && (temp2 != 0));
	return (temp1 + temp2);
}

const mainLogic = () => {
	const num1 = getRandomInt(0, 100);
	const num2 = getRandomInt(0, 100);
	const question = `Question: ${num1} ${num2}`;
	const correct = String(nod(num1, num2));
	return [question, correct];
}

const main = () => generalProcess(instructions, mainLogic);

export default main;
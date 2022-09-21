import getRandomInt from '../getRandomIntFunc.js';
import generalProcess from '../index.js';

const instruction = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num1) => {
	if (num1 === 1) {
		return true;
	} else if (num1 === 0) {
		return false;
	}

	let amountDiv = 1;
	for (let i = 2; i <= num1; i++) {
		if (num1 % i === 0) {
			amountDiv += 1;
		}
	}

	if (amountDiv === 2) {
		return true;
	} else {
		return false;
	}
}

const mainLogic = () => {
	const num1 = getRandomInt(0, 100);
	const question = `Question: ${num1}`;
	const correct = isPrime(num1);

	if (correct === true) {
		return [question, 'yes'];
	} else if (correct === false) {
		return [question, 'no'];
	}
}

const main = () => generalProcess(instruction, mainLogic);

export default main;
import { getRandomInt } from "./evenLogic.js";
import readlineSync from 'readline-sync';

const operators = ['*', '-', '+'];
console.log("What is the result of the expression?");

const calculations = (num1, num2, operator) => {
	switch (operator) {
		case '*':
			return num1 * num2;
			break;

		case '+':
			return num1 + num2;
			break;

		case '-':
			return num1 - num2;
			break;

		default:
			return 'Unknowed operator';
	}
}

const main = () => {
	let count = 0;
	while (count != 3) {
		const num1 = getRandomInt(0, 100);
		const num2 = getRandomInt(0, 100);
		const currOper = operators[getRandomInt(0, operators.length - 1)];
		console.log(`Question: ${num1} ${currOper} ${num2}`);
		const answer = Number(readlineSync.question('Your answer: '));
		const result = calculations(num1, num2, currOper);

		if (answer === result) {
			console.log("Correct!");
			count += 1;
		} else {
			console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}. \nLet's try again, !'`)
			break;
		}

	}

	if (count === 3) {
		console.log("Congratulations, !")
	}
}

export default main;
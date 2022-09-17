import { getRandomInt } from "./evenLogic.js";
import readlineSync from 'readline-sync';
import generalProcess from "../index.js";

const operators = ['*', '-', '+'];
const instruction = "What is the result of the expression?";

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

const mainLogic = () => {
	const num1 = getRandomInt(0, 100);
	const num2 = getRandomInt(0, 100);
	const currOper = operators[getRandomInt(0, operators.length - 1)];
	const question = `Question: ${num1} ${currOper} ${num2}`;
	const result = String(calculations(num1, num2, currOper));
	return [question, result];
}

const main = () => generalProcess(instruction, mainLogic);

export default main;
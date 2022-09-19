import getRandomInt from '../getRandomIntFunc.js';
import generalProcess from '../index.js';

const instructions = 'What number is missing in the progression?';

const arif = (num1, diff, length) => {
	let array = Array(length);
	for (let i = 0; i < array.length; i++) {
		array[i] = num1;
		num1 += diff;
	}
	return array;
}

const resultStr = (arr) => {
	let str = '';
	for (let i = 0; i < arr.length; i++) {
		str += String(arr[i]);
		str += ' ';
	}
	return str;
}

const mainLogic = () => {
	const num1 = getRandomInt(0, 100);
	const diff = getRandomInt(1, 20);
	const length = getRandomInt(5, 10);
	const place = getRandomInt(0, length);
	const arr = arif(num1, diff, length);
	const correct = String(arr[place]);
	arr[place] = '..';
	let result = resultStr(arr);
	const question = `Question: ${result}`;
	return [question, correct];
}

const main = () => generalProcess(instructions, mainLogic);

export default main;
import readlineSync from 'readline-sync';

const amountOfRounds = 3;

const generalProcess = (instruction, logic) => {
	console.log("Welcome to the Brain games!")
	const nickname = readlineSync.question('May I have your name? ');
	console.log(`Hello, ${nickname}`);
	console.log(instruction);
	let countRes = 0
	for (let i = 0; i < amountOfRounds; i++) {
		const [question, correctRes] = logic();
		console.log(question);
		const answer = readlineSync.question('Your answer: ');

		if (answer === correctRes) {
			console.log("Correct!");
			countRes += 1;
		} else {
			console.log(`'${answer} is wrong answer ;(. Correct answer was '${correctRes}'. \nLet's try again, ${nickname}!`);
			break;
		}
	}

	if (countRes === amountOfRounds) {
		console.log(`Congratulations, ${nickname}!`)
	}
}

export default generalProcess;
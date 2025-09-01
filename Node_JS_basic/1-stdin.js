const readline = require('readline');

const rl = readline.createInterface({
	input: process.stdin,
	output: process.stdout
});

rl.question(`Welcome to Holberton School, what is your name?` , function(INPUT) {
	console.log(`Your name is: ${INPUT}`);
	rl.close();
	console.log('This important software is now closing');
});

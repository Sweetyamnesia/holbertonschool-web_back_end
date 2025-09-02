process.stdout.write('Welcome to Holberton School, what is your name?\n');


process.stdin.resume();

process.stdin.on('data', (data) => {
    const name = data.toString().trim();
	console.log(`Your name is: ${name}`);
});

process.stdin.on('end', () => {
    console.log('This important software is now closing');
});

process.on('SIGINT', () => {
    console.log('This important software is now closing');
    process.exit();
});

function displayMessage(message) {
	return process.stdout.write(message + '\n');
}

module.exports = displayMessage;

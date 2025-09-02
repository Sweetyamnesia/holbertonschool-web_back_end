const fs = require('fs');

function readDatabase(path) {
    return new Promise((resolve, reject) => {
		fs.readFile(path, 'utf8', (error, data) => {
			if (error) {
				reject(error);
			} else {
				resolve(data);
			}
		});
	});
};

module.exports = { readDatabase}
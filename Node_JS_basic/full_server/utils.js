const fs = require('fs');

function readDatabase(path) {
    return fs.promises.readFile(path, 'utf8');
};

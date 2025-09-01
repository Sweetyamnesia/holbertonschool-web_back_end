const assert = require('assert');
const displayMessage = require('../0-console');

describe('0-console.js', () => {
  it('should display the correct message', () => {
    // On capture stdout
    let output = '';
    const storeLog = inputs => (output += inputs);
    const originalWrite = process.stdout.write;
    process.stdout.write = storeLog;

    displayMessage('Hello NodeJS!');

    process.stdout.write = originalWrite; // restore

    assert.strictEqual(output, 'Hello NodeJS!\n');
  });
});

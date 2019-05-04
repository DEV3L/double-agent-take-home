const assert = require('assert');

const IngeniousOCR = require('./ingenious-ocr');

describe('Ingenious OCR Machine', function() {
  it('OCR numbers', function() {
    const expectedAccount = '123456789';
    // prettier-ignore
    const accountCharacters =
      "    _  _     _  _  _  _  _ \n" +
      "  | _| _||_||_ |_   ||_||_|\n" +
      "  ||_  _|  | _||_|  ||_| _|\n"

    const ocrMachine = new IngeniousOCR();
    const account = ocrMachine.read(accountCharacters);

    assert.equal(expectedAccount, account);
  });
});

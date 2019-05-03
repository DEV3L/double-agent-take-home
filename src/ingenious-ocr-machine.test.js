const assert = require('assert');

const IngeniousOCRMachine = require('./ingenious-ocr-machine');

describe('Ingenious OCR Machine', function() {
  it('OCR all zeros', function() {
    const expectedAccount = '000000000';
    // prettier-ignore
    const accountCharacters =
      " _  _  _  _  _  _  _  _  _ \n" +
      "| || || || || || || || || |\n" +
      "|_||_||_||_||_||_||_||_||_|\n"

    const ocrMachine = new IngeniousOCRMachine();
    const account = ocrMachine.read(accountCharacters);

    assert.equal(expectedAccount, account);
  });

  it('OCR all ones', function() {
    const expectedAccount = '111111111';
    // prettier-ignore
    const accountCharacters =
    "                           \n" +
    "|  |  |  |  |  |  |  |  |  \n" +
    "|  |  |  |  |  |  |  |  |  \n"

    const ocrMachine = new IngeniousOCRMachine();
    const account = ocrMachine.read(accountCharacters);

    assert.equal(expectedAccount, account);
  });

  it('OCR one and rest zeros', function() {
    const expectedAccount = '100000000';
    // prettier-ignore
    const accountCharacters =
      "    _  _  _  _  _  _  _  _ \n" +
      "|  | || || || || || || || |\n" +
      "|  |_||_||_||_||_||_||_||_|\n"

    const ocrMachine = new IngeniousOCRMachine();
    const account = ocrMachine.read(accountCharacters);

    assert.equal(expectedAccount, account);
  });

  it('OCR two and rest zeros', function() {
    const expectedAccount = '200000000';
    // prettier-ignore
    const accountCharacters =
      " _  _  _  _  _  _  _  _  _ \n" +
      " _|| || || || || || || || |\n" +
      "|_ |_||_||_||_||_||_||_||_|\n"

    const ocrMachine = new IngeniousOCRMachine();
    const account = ocrMachine.read(accountCharacters);

    assert.equal(expectedAccount, account);
  });

  // it('OCR numbers', function() {
  //   const expectedAccount = '200000000';
  //   // prettier-ignore
  //   const accountCharacters =
  //     "    _  _  _  _  _  _  _  _ \n" +
  //     "|   _| _|| || || || || || |\n" +
  //     "|  |_  _||_||_||_||_||_||_|\n"

  //   const ocrMachine = new IngeniousOCRMachine();
  //   const account = ocrMachine.read(accountCharacters);

  //   assert.equal(expectedAccount, account);
  // });
});

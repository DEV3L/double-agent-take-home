/*
You work for a bank, which has recently purchased an ingenious machine to assist in reading letters and 
faxes sent in by branch offices. The machine scans the paper documents, and produces a file with a number of 
entries which each look like this:

```
    _  _     _  _  _  _  _
  | _| _||_||_ |_   ||_||_|
  ||_  _|  | _||_|  ||_| _|
```

Each entry is 4 lines long, and each line has 27 characters. 
The first 3 lines of each entry contain an account number written using pipes and underscores, 
and the fourth line is blank. Each account number should have 9 digits, all of which should be in the range 0-9. 
A normal file contains around 500 entries.

Your first task is to write a program that can take this file and parse it into actual account numbers.

*/

const assert = require('assert');

const IngeniousOCRMachine = require('./ingenious-ocr-machine');

describe('Ingenious OCR Machine', function() {
  it('OCR all zeros', function() {
    const expectedAccount = '000000000';
    // prettier-ignore
    const zeros =
      " _  _  _  _  _  _  _  _  _ \n" +
      "| || || || || || || || || |\n" +
      "|_||_||_||_||_||_||_||_||_|\n"

    const ocrMachine = new IngeniousOCRMachine();
    const account = ocrMachine.read(zeros);

    assert.equal(expectedAccount, account);
  });

  it('OCR all ones', function() {
    const expectedAccount = '111111111';
    // prettier-ignore
    const ones = 
    "                           \n" +
    "|  |  |  |  |  |  |  |  |  \n" +
    "|  |  |  |  |  |  |  |  |  \n"

    const ocrMachine = new IngeniousOCRMachine();
    const account = ocrMachine.read(ones);

    assert.equal(expectedAccount, account);
  });
});

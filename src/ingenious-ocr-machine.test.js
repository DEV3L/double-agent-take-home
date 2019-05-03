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

```
use case 1
 _  _  _  _  _  _  _  _  _
| || || || || || || || || |
|_||_||_||_||_||_||_||_||_|

=> 000000000
*/

const assert = require('assert');

const IngeniousOCRMachine = require('./ingenious-ocr-machine');

// test suite
describe('Ingenious OCR Machine', function() {
  // individual test
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
});

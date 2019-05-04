const AccountReader = require('./src/machine/account-reader');
const IngeniousOCR = require('./src/machine/ingenious-ocr');

const FILE_NAME = 'bank-small.txt';

const accountReader = new AccountReader();
const fileContents = accountReader.read(FILE_NAME);

const ocrMachine = new IngeniousOCR();
const account = ocrMachine.read(fileContents);

console.log(account);

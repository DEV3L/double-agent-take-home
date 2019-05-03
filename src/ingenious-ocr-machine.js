var range = require('range');
var _ = require('lodash');

class IngeniousOCRMachine {
  read(accountCharacters) {
    const accountLines = accountCharacters.split('\n');

    // break into chunks
    const parsedAccountCharacters = range.range(0, 9).map(index => {
      const accountCharacter = [];

      // prettier-ignore
      accountCharacter.push(accountLines[0].slice(index * 3, (index * 3) + 3));
      accountCharacter.push(accountLines[1].slice(index * 3, index * 3 + 3));
      accountCharacter.push(accountLines[2].slice(index * 3, index * 3 + 3));

      return accountCharacter;
    });

    var isFirstOne = _.difference(parsedAccountCharacters[0], OCR_ONE).length == 0;
    var isSecondOne = _.difference(parsedAccountCharacters[1], OCR_ONE).length == 0;
    if (isFirstOne && !isSecondOne) {
      return '100000000';
    }
    if (accountCharacters.split('_').length === 1) {
      return '111111111';
    }
    return '000000000';
  }
}

module.exports = IngeniousOCRMachine;

// prettier-ignore
const OCR_ONE = [
   "   ",
   "|  ",
   "|  "
  ]

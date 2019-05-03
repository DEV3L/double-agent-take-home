const range = require('range');
const _ = require('lodash');

class IngeniousOCRMachine {
  read(accountCharacters) {
    const accountLines = accountCharacters.split('\n');

    const parsedAccountCharacters = this.chunkAccountCharacters(accountLines);

    const account = parsedAccountCharacters.reduce((account, character) => {
      const isOne = _.difference(character, OCR_ONE).length == 0;
      const isTwo = _.difference(character, OCR_TWO).length == 0;

      if (isOne) {
        account += '1';
      } else if (isTwo) {
        account += '2';
      } else {
        account += '0';
      }

      return account;
    }, '');

    return account;
  }

  chunkAccountCharacters(accountLines) {
    return range.range(0, 9).map(index => {
      const accountCharacter = [];
      // prettier-ignore
      accountCharacter.push(accountLines[0].slice(index * 3, (index * 3) + 3));
      accountCharacter.push(accountLines[1].slice(index * 3, index * 3 + 3));
      accountCharacter.push(accountLines[2].slice(index * 3, index * 3 + 3));
      return accountCharacter;
    });
  }
}

module.exports = IngeniousOCRMachine;

// prettier-ignore
const OCR_ONE = [
   "   ",
   "|  ",
   "|  "
  ]

// prettier-ignore
const OCR_TWO = [
   " _ ",
   " _|",
   "|_ "
  ]

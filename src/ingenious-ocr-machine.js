const range = require('range');

class IngeniousOCRMachine {
  read(accountCharacters) {
    const accountLines = accountCharacters.split('\n');
    const chunkedAccountCharacters = this.chunkAccountCharacters(accountLines);
    return this.parseAccount(chunkedAccountCharacters);
  }

  chunkAccountCharacters(accountLines) {
    return range.range(0, 9).map(index => {
      const window = index * 3;
      const characterLength = 3;

      return range.range(0, 3).map(index => {
        return accountLines[index].slice(window, window + characterLength);
      });
    });
  }

  parseAccount(chunkedAccountCharacters) {
    return chunkedAccountCharacters.reduce((account, character) => {
      return parseCharacter(account, character);
    }, '');
  }
}

const parseCharacter = (account, character) => {
  const isOne = compare(character, OCR_ONE);
  const isTwo = compare(character, OCR_TWO);
  const isThree = compare(character, OCR_THREE);

  if (isOne) {
    account += '1';
  } else if (isTwo) {
    account += '2';
  } else if (isThree) {
    account += '3';
  } else {
    account += '0';
  }

  return account;
};

const compare = (character, expected) => {
  const isSame = character.reduce((isSame, characterLine, index) => {
    isSame = characterLine === expected[index];
    return isSame;
  }, false);
  return isSame;
};

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

// prettier-ignore
const OCR_THREE = [
  " _ ",
  " _|",
  " _|"
 ]

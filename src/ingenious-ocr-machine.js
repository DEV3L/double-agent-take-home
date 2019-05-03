const range = require('range');
const ocrCharacters = require('./ocr-characters');

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
  account += Object.keys(ocrCharacters).reduce((value, ocrValue) => {
    const ocrCharacter = ocrCharacters[ocrValue];
    if (compare(character, ocrCharacter)) {
      return ocrValue;
    }
    return value;
  }, 0);
  return account;
};

const compare = (character, expected) => {
  const isSame = character.reduce((isSame, characterLine, index) => {
    isSame = isSame && characterLine === expected[index];
    return isSame;
  }, true);
  return isSame;
};

module.exports = IngeniousOCRMachine;

const range = require('range');

const parseCharacter = require('./parseCharacter');

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

module.exports = IngeniousOCRMachine;

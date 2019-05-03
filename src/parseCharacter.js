const ocrCharacters = require('./ocr-characters');

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

module.exports = parseCharacter;

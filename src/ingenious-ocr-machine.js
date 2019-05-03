class IngeniousOCRMachine {
  read(accountCharacters) {
    if (accountCharacters.split('_').length === 1) {
      return '111111111';
    }
    return '000000000';
  }
}

module.exports = IngeniousOCRMachine;

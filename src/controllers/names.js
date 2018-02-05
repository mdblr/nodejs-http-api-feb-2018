'use strict';
const namesObject = require('../../names.mock.json');

function searchNames(nameQuery) {

  if(typeof nameQuery !== 'string') {
    throw new Error(`Expected string but got: ${typeof nameQuery}`);
  }

  if (!nameQuery.trim()) {
    throw new Error('Name cannot be blank');
  }

  const { names } = getNames();
  const RE = new RegExp(`${nameQuery}`, 'ig');
  const results = names.filter(name => RE.test(name));
  return results;
}

function getNames() {
  return namesObject;
}

module.exports = {
  searchNames,
  getNames
};

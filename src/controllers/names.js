'use strict';
const namesObject = require('../../names.mock.json');

function getName(nameQuery) {
  const { names } = getNames();
  const RE = new RegExp(`${nameQuery}`, 'ig');
  const results = names.filter(name => RE.test(name));
  return results;
}

function getNames() {
  return namesObject;
}

module.exports = {
  getName,
  getNames
}

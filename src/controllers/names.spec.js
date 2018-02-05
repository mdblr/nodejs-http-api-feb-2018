'use strict';

const expect = require('chai').expect;
// TODO: re-require data per test
const mockData = require('../../names.mock.json');

const { searchNames, getNames } = require('./names');


describe('names controller', () => {
  describe('searchNames', () => {

    it('should be typeof "function"', () => {
      expect(searchNames).to.be.a('function');
    });

    it('should return an array given any input string', () => {
      const input = 'abcd1234/?"}+"';
      expect(searchNames(input)).to.be.an('array');
    });

    it('should throw an error if argument is an empty string', () => {
      expect(searchNames.bind('    ')).to.throw();
      expect(searchNames.bind('')).to.throw();
    });

    it('should throw an error if argument is not a string', () => {
      expect(searchNames.bind(12345689)).to.throw();
      expect(searchNames.bind({hello: 'world'})).to.throw();
    });

    it('should match stored names using partial name as input', () => {
      const output = searchNames('Sylvia');
      expect(output).to.include('Sylvia Rivera');
    });

    it('should match stored names using full name as input', () => {
      const fullName = 'Hubert Blaine Wolfeschlegelsteinhausenbergerdorff';
      const [ match ] = searchNames(fullName);
      expect(match).to.equal(fullName);
    });

    it('should return an empty array if a match does not occur', () => {
      const output = searchNames('Lorem Ipsum Omega Theta O');
      expect(output).to.have.length(0);
    });

  });

// TODO modify getNames to feel more like you're working with network calls
  describe('getNames', () => {
    it('should be typeof "function"', () => {
      expect(getNames).to.be.a('function');
    });

    it('should always return an array', () => {
      const { names } = getNames();
      expect(names).to.be.an('array');
    });

    it('should return an array containing only string items', () => {
      const { names } = getNames();
      const onlyStrings = names.every(name => typeof name === 'string');
      expect(onlyStrings).to.be.true;
    });

  });
});

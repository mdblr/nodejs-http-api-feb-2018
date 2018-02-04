'use strict';

const expect = require('chai').expect;
const mockData = require('../../names.mock.json');

const { getName, getNames } = require('./names');


describe('names controller', () => {
  describe('getName', () => {
    it('should be typeof "function"', () => {
      expect(getName).to.be.a('function');
    });

    it('should return "Daniel Johnson"', () => {
      expect(getName('Daniel')).to.equal('Daniel Johnson');
    });
  });

  describe('getNames', () => {
    it('should be typeof "function"', () => {
      expect(getNames).to.be.a('function');
    });

    it('should return an array', () => {
      const { names } = getNames();
      expect(names).to.be.an('array');
    });
  });
});

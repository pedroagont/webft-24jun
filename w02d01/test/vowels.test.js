// const assert = require('assert');
const assert = require('chai').assert;
const expect = require('chai').expect;
const should = require('chai').should();
const numberOfVowels = require('../vowels');

describe('numberOfVowels()', () => {
  it('should return 3 when passing "orange"', () => {
    const actual = numberOfVowels('orange');
    const expected = 3;
    // assert.equal(actual, expected);

    expect(actual).to.be.a('number');
    expect(actual).to.equal(expected);
  });

  it('should return 4 when passing "lighthouse"', () => {
    const actual = numberOfVowels('lighthouse');
    const expected = 4;
    // assert.equal(actual, expected);

    actual.should.be.a('number');
    actual.should.equal(expected);
  });

  it('should return 5 when passing "lighthouse labs"', () => {
    const actual = numberOfVowels('lighthouse labs');
    const expected = 5;
    assert.equal(actual, expected);
  });

  it('should return 5 when passing "aeiou"', () => {
    const actual = numberOfVowels('aeiou');
    const expected = 5;
    assert.equal(actual, expected);
  });

  it('should return null when passing no argument', () => {
    const actual = numberOfVowels();
    const expected = null;
    assert.equal(actual, expected);
  });
});

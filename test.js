let assert = require('assert');
const { expect } = require('chai');

describe('Array', () => {
  it('should return -1 when value is not present', () => {
    assert.equal([1,2,3].indexOf(4), -1);
  });
  
  it('should verify testString\'s value and type', () => {
    var testString = 'foo'
    expect(testString).to.be.a('string');
    expect(testString).to.equal('foo');
  });
});
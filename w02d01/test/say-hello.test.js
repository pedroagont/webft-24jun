const assert = require('assert');
const { sayHello, sayHelloWithUsername } = require('../say-hello');

describe('sayHello()', function () {
  it('should return "Hello!" when called', function () {
    assert.equal(sayHello(), 'Hello!');
  });
});

describe('sayHelloWithUsername("Pedro")', function () {
  it('should return "Hello Pedro" when called', function () {
    assert.equal(sayHelloWithUsername('Pedro'), 'Hello Pedro');
  });
});

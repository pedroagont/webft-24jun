// IMPORT STATEMENTS
// const assert = require('assert');

// FUNCTION DECLARING
const sayHello = () => 'Hello!';

console.log(sayHello());

// MANUAL TESTING
// const assertEquals = (actual, expected) => {
//   if (actual === expected) {
//     console.log('sayHello(): Correct! ✅');
//   } else {
//     console.log('sayHello(): Failed! ❌');
//   }
// };

// assertEquals(sayHello(), 'Hello!');

// CONSOLE ASSERT TESTING
// console.assert(sayHello() === 'hello!', 'sayHello() failed!');

// NODE ASSERT TESTING
// assert.equal(sayHello(), 'Hello!', 'sayHello() failed!');

const sayHelloWithUsername = (username) => 'Hello ' + username;

// EXPORT
// module.exports = sayHello;
module.exports = { sayHello, sayHelloWithUsername };

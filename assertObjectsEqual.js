const eqObjects = require('./eqObjects')

const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

module.exports = assertObjectsEqual

//test
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };



// const abc = { a: "1", b: "2", c: "3" };
// console.log(assertObjectsEqual(ab, abc)); // => false


// assertObjectsEqual({a: 1, b: 2}, {b: 2, a:1});
// assertObjectsEqual({ a: "1", b: "2", c: "3" }, ab);
// assertObjectsEqual(ab, ba);
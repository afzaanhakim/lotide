const eqObjects = function(object1, object2) {
  let result = true;
  let key1 = Object.keys(object1);
  let key2 = Object.keys(object2);
  if (key1.length !== key2.length) {
    result = false;
  } else {
    for (const a in object1) {
      if (Array.isArray(object1[a]) && Array.isArray(object2[a])) {
        return eqArrays(object1[a], object2[a]);
      } else {
        if (object1[a] !== object2[a]) {
          result = false;
        }
      }
    }
  } return result;
};


const assertObjectsEqual = function(actual, expected) {
  // Implement me!
  const inspect = require('util').inspect;
  if (eqObjects(actual, expected)) {
    console.log(`👍👍👍 Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
  
};

const ab = { a: "1", b: "2" };
const ba = { b: "2", a: "1" };



const abc = { a: "1", b: "2", c: "3" };
console.log(assertObjectsEqual(ab, abc)); // => false


assertObjectsEqual({a: 1, b: 2}, {b: 2, a:1})
assertObjectsEqual({ a: "1", b: "2", c: "3" }, ab)
assertObjectsEqual(ab, ba)
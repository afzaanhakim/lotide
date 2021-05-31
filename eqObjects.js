const assertEqual = require('./assertEqual')
const eqArrays = require('./eqArrays')

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

module.exports = eqObjects;


//test
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab, ba)); // => true

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab, abc)); // => false

// console.log(eqObjects(ab,ba));
// console.log(eqObjects(ab, abc));

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc)); // => true

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2)); // => false
const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')



 const without = (source, itemsToRemove) => {
   let unwanted = [];
   for (let i = 0; i < source.length; i++) {
     if (!itemsToRemove.includes(source[i])) {
       unwanted.push(source[i]);
    }
   }
  return unwanted;
};

module.exports = without;

// console.log(without([1, 2, 3], [1]));
// console.log(without(["1", "2", "3"], [1, 2, "3"]));
// const words = ["hello", "world", "lighthouse"];
// console.log(without(words, ["lighthouse"])); // no need to capture return value for this test case
// // Make sure the original array was not altered by the without function
// assertArraysEqual(words, ["hello", "world", "lighthouse"]);


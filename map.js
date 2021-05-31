
const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')



const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback){
  const result = [];
  for (let item of array) {
    result.push(callback(item))
  }
  return result;
};


module.exports = map

// //test cases
// const results1 = map(words, word => word[0]);
// console.log(results1);



// assertArraysEqual(map(["Hello", "This", "Is", "Lighthouse"], word => word[0]), ["H", "T", "I", "L"]);
// assertArraysEqual(map(["What", "Time", "Is", "It"], word => word[0]), ["W", "T", "N", 3]);
// assertArraysEqual(map(["ground", "control", "to", "major", "tom"], word => word[0]), ["g", "c", "t", "m", "t"]);

const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')

const letterPositions = function(sentence) {
  const results = {};

  for (let i = 0; i < sentence.length; i++) {
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      } else {
        results[sentence[i]].push(i);
      }
    }
  } return results;
};


module.exports = letterPositions

// console.log(letterPositions("hello"));
// assertArraysEqual(letterPositions("hello").e, [1]);
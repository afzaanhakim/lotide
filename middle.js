const assertArraysEqual = require('./assertArraysEqual')
const middle = function(array) {

  let output = [];
  let midOdd = array[Math.floor((array.length - 1) / 2)];
  let midEven = array[(array.length / 2)];
  if (array.length <= 2) {
    return output;
  } if (array.length % 2 === 0) {
    output.push(midOdd, midEven);
  } else {
    output.push(midOdd);
  }
  return output;
}


module.exports = middle;


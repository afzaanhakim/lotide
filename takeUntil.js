const eqArrays = require('./eqArrays')

const assertArraysEqual = require('./assertArraysEqual')


const takeUntil = function(array, callback) {
  let results = [];
  for (let a of array) {
    results.push(a);
    if (callback(a)) {
      break;
    }
  }
  return results.slice(0, -1);
};


module.exports = takeUntil;


//test code
// const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
// const result = takeUntil(data2, x => x === ',');

// console.log(result);

// const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
// const results1 = takeUntil(data1, x => x < 0);
// console.log(results1);


// assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
// assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ "I've", "been", "to", "Hollywood" ]);
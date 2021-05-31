
const assertArraysEqual = require('../assertArraysEqual');



//test cases
assertArraysEqual([1, 2, 3], [1, 2, 3]);//-----> test cases
assertArraysEqual(["1", "2", "3"], ["1", "2", "three"]); //
assertArraysEqual([1, 2, 3], [1, 2, 3, 4])
assertArraysEqual([1, 2, 3], [1, 2, "3"])
  
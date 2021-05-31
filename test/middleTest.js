const middle = require('../middle');
const assertArraysEqual = require('../assertArraysEqual')





//test ---->

middle([1, 2]);
assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]
assertArraysEqual(middle([2, 4, 6, 8]), [4,7]); //=> [4, 6] =>should FAIL assertArraysEqual 
assertArraysEqual(middle(["hello", "my", "name", "is"]), ["my", "name"]); //=> ["my", "name"]

const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {

  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });

  it("returns empty array for an array with only 2 elements", () => {
    assert.deepEqual(middle([1, 2]), []);
  });


  it("returns empty array for an array with only 1 elements", () => {
    assert.deepEqual(middle([1]), []);
  });

  it("returns [3,4] for [1, 2, 3, 4, 5, 6]", () => {
    assert.deepEqual(middle([1,2,3,4,5,6]), [3,4]);
  });

  it("returns [65] for array called grades", () => {
    let grades = [100, 70,  65 , 90, 85]
    assert.deepEqual(middle(grades), [65]);
  });



});




//test ---->

// middle([1, 2]);
// assertArraysEqual(middle([1, 2, 3]), [2]); // => [2]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3,4]); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6, 7]), [4]); // => [4]
// assertArraysEqual(middle([2, 4, 6, 8]), [4,7]); //=> [4, 6] =>should FAIL assertArraysEqual 
// assertArraysEqual(middle(["hello", "my", "name", "is"]), ["my", "name"]); //=> ["my", "name"]

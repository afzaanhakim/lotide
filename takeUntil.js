const eqArrays = (arr1, arr2) => {
  let result = true; //declaring a variable as true to check for future test cases
  if (arr1.length !== arr2.length) {//first case to check if the length of arrays are equal
    return result = false; //return false if length is not equal
  } else {
    for (let a = 0; a < arr1.length; a++) {//use a for loop to loop over elements of the first array
      if (arr1[a] !== arr2[a]) {//compare if any element of array1  !== element of array2
        return result = false; // return as false if any elements are not there in both arrays
      }
    }
  }
  return result; // if both the above test conditions fail (checking inequality of array length and checking inequality of array elements; then we return the original result)
};

const assertArraysEqual = (arr1, arr2) => {
  if (eqArrays(arr1, arr2) === true) {
    console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
  } else {
    console.log(`😭😭😭 Assertion Failed: ${arr1} !== ${arr2}`);
  }
};


const takeUntil = function(array, callback) {
  let results = [];
  for (let a of array) {
    results.push(a);
    if (callback(a)) {
      break;
    }
  }
  return results.slice(0, -1)
};

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const result = takeUntil(data2, x => x === ',');

console.log(result);

const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
console.log(results1);


assertArraysEqual(takeUntil(data1, x => x < 0), [ 1, 2, 5, 7, 2 ]);
assertArraysEqual(takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ','), [ "I've", "been", "to", "Hollywood" ]);
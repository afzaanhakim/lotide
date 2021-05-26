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


const letterPositions = function(sentence) {
  const results = {};

  for (i = 0; i < sentence.length; i++){
    if (sentence[i] !== " ") {
      if (!results[sentence[i]]) {
        results[sentence[i]] = [i];
      }
      else {
        results[sentence[i]].push(i);
      }
    }
  } return results
};


console.log(letterPositions("hello"))
assertArraysEqual(letterPositions("hello").e, [1])
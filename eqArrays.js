const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};


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

console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false
console.log(eqArrays(["1", "2", "3"], ["1", "2", "3"])); // => true
console.log(eqArrays(["1", "2", "3"], ["1", "2", 3])); // => false

assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true); // => should PASS

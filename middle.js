// const eqArrays = (arr1, arr2) => {
//   let result = true; //declaring a variable as true to check for future test cases
//   if (arr1.length !== arr2.length) {//first case to check if the length of arrays are equal
//     return result = false; //return false if length is not equal
//   } else {
//     for (let a = 0; a < arr1.length; a++) {//use a for loop to loop over elements of the first array
//       if (arr1[a] !== arr2[a]) {//compare if any element of array1  !== element of array2
//         return result = false; // return as false if any elements are not there in both arrays
//       }
//     }
//   }
//   return result; // if both the above test conditions fail (checking inequality of array length and checking inequality of array elements; then we return the original result)
// };

// const assertArraysEqual = (arr1, arr2) => {
//   if (eqArrays(arr1, arr2) === true) {
//     console.log(`👍👍👍 Assertion Passed: ${arr1} === ${arr2}`);
//   } else {
//     console.log(`😭😭😭 Assertion Failed: ${arr1} !== ${arr2}`);
//   }
// };



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




console.log(middle([1, 2]));
console.log(middle([1, 2, 3])); // => [2]
console.log(middle([1, 2, 3, 4, 5])); // => [3]
console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
console.log(middle([1, 2, 3, 4, 5, 6, 7])); // => [4]
console.log(middle([2, 4, 6, 8])); //=> [4, 6]
console.log(middle(["hello", "my", "name", "is"])); //=> ["my", "name"]

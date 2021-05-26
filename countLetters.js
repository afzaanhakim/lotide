const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};



const countLetters = function(string) {
  let result = {};
  let splitString = string.split('');
  for (let letters of splitString) {
    if (letters === " ") {
      splitString.slice(splitString.indexOf(" "), 1);
    } else if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
  return result;
};


console.log(countLetters('lighthouse in the house'));

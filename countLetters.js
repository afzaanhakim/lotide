const assertEqual = require('./assertEqual')



const countLetters = function(string) {
  let result = {};
  let splitString = string.split('');
  for (let letters of splitString) {
    if (letters !== " ") {
      // splitString.slice(splitString.indexOf(" "), 1);
     if (result[letters]) {
      result[letters] += 1;
    } else {
      result[letters] = 1;
    }
  }
}
  return result;
};

module.exports = countLetters;

// countLetters('lighthouse in the house');

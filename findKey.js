const assertEqual = require('./assertEqual')

const findKey = function(name, callback) {

  for (let n in name) {
    if (callback(name[n])) {
      return n;
    }
  }
};

module.exports = findKey;

// console.log(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2));



// assertEqual(findKey({
//   "Blue Hill": { stars: 1 },
//   "Akaleri":   { stars: 3 },
//   "noma":      { stars: 2 },
//   "elBulli":   { stars: 3 },
//   "Ora":       { stars: 2 },
//   "Akelarre":  { stars: 3 }
// }, x => x.stars === 2), "noma");



// assertEqual(findKey({
//   "Corvette": { price: 150000 },
//   "BMW":   { price: 75000 },
//   "KIA":      { price: 20000 },
//   "Porsche":   { price: 100000 },
//   "Lexus":       { price: 70000 },
//   "Toyota":  { price: 15000 }
// }, r => r.price === 70000), "Lexus");
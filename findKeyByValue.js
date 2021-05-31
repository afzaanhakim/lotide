const assertEqual = require('./assertEqual')

const findKeyByValue = function(title, name) {
  let result = undefined;
  for (let genre in title) {
    if (title[genre] === name) {
      return genre;
    }
  } return result;
};


module.exports = findKeyByValue



//test cases

// const bestTVShowsByGenre = {
//   sci_fi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };
// console.log(findKeyByValue(bestTVShowsByGenre, "The Wire"));
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// const bestMoviesByGenre = {
//   sci_fi: "Interstellar",
//   horror: "A Quiet Place",
//   comedy: "Forest Gump"
// }

// findKeyByValue(bestMoviesByGenre, "A Quiet Place");
// assertEqual(findKeyByValue(bestMoviesByGenre, "A Quiet Place"), "horror");
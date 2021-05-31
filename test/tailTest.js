

//const assertEqual = require('./assertEqual');
const tail = require('../tail');








//test1
const result = tail(["Hello", "Lighthouse", "Labs"]);
assertEqual(result[1], "Labs");
assertEqual(result.length, 2);
assertEqual(result[0], "Lighthouse");


//test2
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!
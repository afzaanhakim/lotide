const assertEqual = (actual, expected) => {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
  }
};

let tail = (arr) => {
  let vars = arr.slice(1);
  return vars;
};
let arr = ["Hello", "Lighthouse", "Labs"];
let result = tail(arr);

    
assertEqual(result[0], "Lighthouse");
assertEqual(result[1], "Labs");
assertEqual(arr.length, 3);

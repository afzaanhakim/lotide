

const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2,3]);
  });


  it('returns ["Lighthouse", "Labs"] for ["Hello", "Lighthouse", "Labs"]', () => {
    assert.deepEqual(tail(["Hello", "Lighthouse", "Labs"]), ["Lighthouse", "Labs"]);
  });



  it('returns ["Lighthouse", "Labs"] for ["YoYo", "Lighthouse", "Labs"]', () => {
    let words = ["YoYo", "Lighthouse", "Labs"];
    assert.deepEqual(tail(words), ["Lighthouse", "Labs"]);
  });


  it('fails to return ["90", "101"] for ["50", "90", "100"]', () => {
    let result = [50, 90, 100];
    assert.notDeepEqual(tail(result), [90, 101]);
  });
});






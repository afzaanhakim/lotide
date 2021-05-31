# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @afzaanhakim/lotide`

**Require it:**

`const _ = require('@afzaanhakim/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: a function that passes if two arrays are equal
* `assertEqual`: a function that passes if two elements are equal
* `assertObjectsEqual`: a function that takes in two objects and console.log's an appropriate message to the console.
* `countLetters`: a function that counts the number of times a letter exists in a string
* `countOnly`: a function that takes in a collection of items and return counts for a specific subset of those items
* `eqArrays`: a function that can compare two arrays for a perfect match.
* `eqObjects`: a function that can compare two objects
* `findKey`: scans the object and returns the first key for which the callback returns a truthy value. If no key is found, then it will return undefined.
* `findKeyByValue`: a function scans the object and returns the first key which contains the given value. If no key with that given value is found, then it will return undefined.
* `head`: a function that returns the first element in an array
* `letterPositions`: a function that returns  all the indices (zero-based positions) in the string where each character is found.
* `map`: a function takes in two arguments (an array and a callback) and returns a new array based on the results of the callback function
* `middle`: a function that will return only the middle element(s) of an array based on conditions such as array length
* `tail`: a function that will return the "tail" of an array: everything except for the first item (head) of the provided array.
* `takeUntil`: a function that will return a slice of the array with elements taken from the beginning until the callback returns a truth value
* `without`: a function that will return a subset of a gievn array, removing unwanted elements







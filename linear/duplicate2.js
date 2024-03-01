// Remove Duplicates from an Array
// Create a function that takes an array of items, removes all duplicate items and returns a new array in the same sequential order as the old array (minus duplicates).

// Examples
// removeDups([1, 0, 1, 0]) ➞ [1, 0]

// removeDups(["The", "big", "cat"]) ➞ ["The", "big", "cat"]

// removeDups(["John", "Taylor", "John"]) ➞ ["John", "Taylor"]

function double(array) {
  var newArray = [];
  var i = 0;

  while (i < array.length) {
    if (!newArray.includes(array[i])) {
      newArray.push(array[i]);
    }
    i += 1;
  }
  return newArray;
}
console.log(double(["John", "Taylor", "John"]));

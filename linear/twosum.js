// This is the same exercise as Two Sum I, but you must now solve it in linear time.

// Given an array of numbers, return a new array containing just two numbers (from the original array) that add up to the number 10. If there are no two numbers that add up to 10, return false.

// Input: [2, 5, 3, 1, 0, 7, 11]
// Output: [3, 7]

// Input: [1, 2, 3, 4, 5]
// Output: false (While 1, 2, 3, and 4 altogether add up to 10, we're seeking just one pair of numbers.)

function twosum(array) {
  let i = 0;
  let newArray = [];

  while (i < array.length) {
    j = i + 1;

    while (j < array.length) {
      total = array[i] + array[j];
      if (total === 10) {
        newArray.push(array[i]) && newArray.push(array[j]);
        return newArray;
      } else {
        j += 1;
      }
    }
    i += 1;
  }
  return false;
}

console.log(twosum([2, 5, 3, 1, 0, 7, 11]));

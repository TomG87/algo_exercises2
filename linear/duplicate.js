// A given array has one pair of duplicate values. Return the first duplicate value.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [5, 2, 9, 7, 2, 6]
// Output: 2

function duplicate(array) {
  let i = 0;

  while (i < array.length - 1) {
    j = i + 1;

    while (j < array.length) {
      if (array[i] === array[j]) {
        return array[i];
      }
      j += 1;
    }
    i += 1;
  }
}

console.log(duplicate([5, 2, 9, 7, 2, 6]));

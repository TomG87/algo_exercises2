// Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
// Output: [1, 3, 5]

function intersection(array, array2) {
  let i = 0;
  let newHash = [];

  while (i < array.length) {
    array2.forEach(function (single) {
      if (array[i] === single) {
        newHash.push(single);
      }
    });
    i += 1;
  }
  return newHash;
}

console.log(intersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]));

// Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

function odd(array) {
  let i = 0;
  let sum = 0;

  while (i < array.length) {
    if (array[i] % 2 !== 0) {
      sum += array[i];
    }
    i += 1;
  }
  return sum;
}

console.log(odd([1, 2, 5, 4, 6, 7, 8, 9, 13]));

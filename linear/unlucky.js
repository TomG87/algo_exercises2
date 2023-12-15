// Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

function unlucky(array) {
  newHash = [];

  array.forEach(function (number) {
    if (number % 13 !== 0) {
      newHash.push(number);
    }
  });
  return newHash;
}

console.log(unlucky([24, 316, 393, 458, 1279]));

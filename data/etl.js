// You are given two parameters, an array and a number. Return a hash whose keys are each of the values from the array parameter, and whose values are the number parameter.

// Input:

// First argument: ["a", "e", "i", "o", "u"]
// Second argument: 1

// Output:

// {
// 'a' => 1,
// 'e' => 1,
// 'i' => 1,
// 'o' => 1,
// 'u' => 1
// }

function etl(array, number) {
  let i = 0;
  let hash = {};
  let newHash = {};

  while (i < array.length) {
    if (hash[array[i]]) {
      hash[array[i]] += 1;
    } else {
      hash[array[i]] = 1;
    }
    i += 1;
  }
  for (let key in hash) {
    if (hash[key] === number) {
      newHash[key] = hash[key];
    }
  }
  return newHash;
}

console.log(etl(["a", "e", "i", "o", "u"], 1));

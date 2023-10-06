// Given a hash, return a flat array containing all the hash’s keys and values.

// Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
// Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

function flatten(hash) {
  let newArray = [];

  Object.keys(hash).forEach(function (key) {
    newArray.push(key, hash[key]);
  });

  return newArray;
}

console.log(flatten({ a: 1, b: 2, c: 3, d: 4 }));

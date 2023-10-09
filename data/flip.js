// Given a hash, create a new hash that has the keys and values switched.

// Input: {"a" => 1, "b" => 2, "c" => 3}
// Output: {1 => "a", 2 => "b", 3 => "c"}

function flip(hash) {
  let newHash = {};

  Object.keys(hash).forEach(function (key) {
    newHash[hash[key]] = key;
  });
  return newHash;
}

console.log(flip({ a: 1, b: 2, c: 3 }));

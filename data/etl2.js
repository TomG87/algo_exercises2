// Description
// You are given a hash in format #A, and you are to return the same data as a hash using format #B, as specified below:

// Input:

// {
// 1 => ["A", "E", "I", "O", "U"]
// }

// Output:

// {
// 'a' => 1,
// 'e' => 1,
// 'i' => 1,
// 'o' => 1,
// 'u' => 1
// }
// Input:

// {
// 1 => ["A", "E"],
// 2 => ["D", "G"]
// }

// Output:

// {
// 'a' => 1,
// 'd' => 2,
// 'e' => 1,
// 'g' => 2
// }

// Input:

// {
// 1 => ["A", "E", "I", "O", "U", "L", "N", "R", "S", "T"],
// 2 => ["D", "G"],
// 3 => ["B", "C", "M", "P"],
// 4 => ["F", "H", "V", "W", "Y"],
// 5 => ["K"],
// 8 => ["J", "X"],
// 10 => ["Q", "Z"]
// }

// Output:

// {
// 'a' => 1,
// 'b' => 3,
// 'c' => 3,
// 'd' => 2,
// 'e' => 1,
// 'f' => 4,
// 'g' => 2,
// 'h' => 4,
// 'i' => 1,
// 'j' => 8,
// 'k' => 5,
// 'l' => 1,
// 'm' => 3,
// 'n' => 1,
// 'o' => 1,
// 'p' => 3,
// 'q' => 10,
// 'r' => 1,
// 's' => 1,
// 't' => 1,
// 'u' => 1,
// 'v' => 4,
// 'w' => 4,
// 'x' => 8,
// 'y' => 4,
// 'z' => 10
// }

function etl2(hash) {
  let newHash = {};
  let i = 0;

  Object.keys(hash).forEach(function (key) {
    Object.values(hash).forEach(function (value) {
      value.forEach(function (single) {
        newHash[single.toString().toLowerCase()] = key;
      });
    });
  });
  return newHash;
}

console.log(etl2({ 1: ["A", "E", "I", "O", "U"] }));

// other way to solve:

// function etl2(hash) {
//   let newHash = {};

//   Object.keys(hash).forEach(function (key) {
//     hash[key].forEach(function (vowel) {
//       const lowercaseVowel = vowel.toString().toLowerCase();
//       if (newHash[lowercaseVowel]) {
//         newHash[lowercaseVowel] += 1;
//       } else {
//         newHash[lowercaseVowel] = 1;
//       }
//     });
//   });

//   return newHash;
// }

// console.log(etl2({ 1: ["A", "E", "I", "O", "U"] }));

function etl3(hash) {
  let newHash1 = {};

  Object.keys(hash).forEach(function (key) {
    hash[key].forEach(function (single) {
      newHash1[single.toString().toLowerCase()] = key;
    });
  });
  return newHash1;
}

console.log(
  etl3({
    1: ["A", "E"],
    2: ["D", "G"],
  })
);

// Instant JAZZ
// Create a function which concatenates the number 7 to the end of every chord in an array. Ignore all chords which already end with 7.

// Examples
// jazzify(["G", "F", "C"]) ➞ ["G7", "F7", "C7"]

// jazzify(["Dm", "G", "E", "A"]) ➞ ["Dm7", "G7", "E7", "A7"]

// jazzify(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]) ➞ ["F7", "E7", "A7", "Ab7"]

function jazz(array) {
  const newArray = [];

  array.forEach(function (single) {
    if (single.includes("7")) {
      newArray.push(single);
    } else {
      newIndex = single.concat("", "7");
      newArray.push(newIndex);
    }
  });
  return newArray;
}

console.log(jazz(["F7", "E7", "A7", "Ab7", "Gm7", "C7"]));

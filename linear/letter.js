// A given string contains all the letters from the alphabet except for one. Return the missing letter.

// NOTE: You must accomplish this in O(n) time. This is also known as linear time.

// Input: “The quick brown box jumps over a lazy dog”
// Output: “f”

function letter(string) {
  let alphabet = "abcdefghijklmnopqrstuvwxyz";

  for (let char of alphabet) {
    if (!string.toLowerCase().includes(char.toLowerCase())) {
      return char;
    }
  }
}

console.log(letter("The quick brown box jumps over a lazy dog"));

// Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

function bomb(string) {
  if (string.toLowerCase().includes("bomb")) {
    return "Duck!!!";
  } else {
    return "There is no bomb, relax.";
  }
}
console.log(bomb("There is a bomb."));

// Create a function that removes the first and last characters from a string.

function removeChar(string) {
  let newString = "";
  let start = 1;
  let end = string.length - 1;

  if (string.length <= 2) {
    return string;
  } else {
    newString += string.substring(start, end);
  }

  return newString;
}

console.log(removeChar("hello"));

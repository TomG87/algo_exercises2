// Write a function that takes two integers (hours, minutes), converts them to seconds, and adds them.

// Examples
// Convert(1, 3) ➞ 3780

// Convert(2, 0) ➞ 7200

// Convert(0, 0) ➞ 0

function conversion(hours, minutes) {
  conversion1 = hours * 3600;
  conversion2 = minutes * 60;

  total = conversion1 + conversion2;

  return total;
}

console.log(conversion(2, 0));

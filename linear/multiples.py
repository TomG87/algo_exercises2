# Array of Multiples
# Create a function that takes two numbers as arguments (num, length) and returns an array of multiples of num until the array length reaches length.

# Examples
# arrayOfMultiples(7, 5) ➞ [7, 14, 21, 28, 35]

# arrayOfMultiples(12, 10) ➞ [12, 24, 36, 48, 60, 72, 84, 96, 108, 120]

# arrayOfMultiples(17, 6) ➞ [17, 34, 51, 68, 85, 102]
# Notes
# Notice that num is also included in the returned array.

def multiples(num, length):

  newArray = []
  i = num
  j = 0

  while j < length:
    newArray.append(num)
    num += i
    j += 1

  return newArray

print(multiples(17, 6))
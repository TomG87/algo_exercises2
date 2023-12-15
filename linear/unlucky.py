# Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

def unlucky(array):

  newHash = []

  for number in array:
    if number % 13 != 0:
      newHash.append(number)
  
  return newHash

print(unlucky([24, 316, 393, 458, 1279]))
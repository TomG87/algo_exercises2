# Given two arrays, return a new array that contains the intersection of the two arrays. The intersection means the values that are contained in both of the arrays. Do not use the "&", or any built-in intersection methods.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [1, 2, 3, 4, 5], [1, 3, 5, 7, 9]
# Output: [1, 3, 5]

def intersection(array, array2):
  
  i = 0
  newHash = []

  while i < len(array):
    for single in array2:
      if array[i] == single:
        newHash.append(single)
    i += 1
  
  return newHash

print(intersection([1, 2, 3, 4, 5], [1, 3, 5, 7, 9]))
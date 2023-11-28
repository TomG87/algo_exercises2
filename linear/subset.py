# Given two arrays, determine whether one is a subset of the other. It is considered a subset if all the values in one array are contained within the other.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [1, 2, 3, 4, 5, 6], [6, 3, 2]
# Output: true

# Input: [1, 2, 3, 4, 5, 6], [6, 3, 7]
# Output: false

def subset(array, array2):

  for single in array2:
    if single not in array:
      return False
  else:
   return True

print(subset([1, 2, 3, 4, 5, 6], [6, 3, 2]))
  
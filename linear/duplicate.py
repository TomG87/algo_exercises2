# A given array has one pair of duplicate values. Return the first duplicate value.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [5, 2, 9, 7, 2, 6]
# Output: 2

def duplicate(array):
  i = 0

  while i < len(array) - 1: 
    j = i + 1

    while j < len(array):
      if array[i] == array[j]:
        return array[i]
      j += 1
    i += 1

print(duplicate([5, 2, 9, 7, 2, 6]))
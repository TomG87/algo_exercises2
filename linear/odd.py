# Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

def odd(array):

  i = 0
  sum = 0

  while i < len(array):
    if array[i] % 2 != 0:
      sum += array[i]
    i += 1
  
  return sum

print(odd([1,2,5,4,6,7,8,9,13]))
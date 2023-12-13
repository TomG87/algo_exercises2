# Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

def minmax(array):
  i = 0
  min = array[i]
  max = array[i]
  lowhigh = []

  while i < len(array):
    if array[i] > max:
      max = array[i]
    if array[i] < min:
      min = array[i]
    i += 1
  lowhigh.append(min)
  lowhigh.append(max)
  return lowhigh

print(minmax([1,34,67,32,13,5,6]))
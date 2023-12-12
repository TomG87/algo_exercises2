# Create a function that takes an array of numbers and return both the minimum and maximum numbers, in that order.

def minmax(array)

  i = 0
  max = array[i]
  min = array[i]
  lowhigh = []

  while i < array.length
    if array[i] > max
      max = array[i]
      if array [i] < min
        min = array[i]
      end
    end
    i += 1
  end

  lowhigh << min && lowhigh << max
  return lowhigh
end

p minmax([1,34,67,32,13,5,6])


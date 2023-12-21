# Create a function which returns the total of all odd numbers up to and including n. n will be given as an odd number.

def odd(array)

  sum = 0
  i = 0
  
  while i < array.length
    if array[i] % 2 != 0
      sum += array[i]
    end
    i += 1
  end

  return sum
end

p odd([1,2,5,4,6,7,8,9,13])
# How Much is True?
# Create a function which returns the number of true values there are in an array.

# Examples
# countTrue([true, false, false, true, false]) ➞ 2

# countTrue([false, false, false, false]) ➞ 0

# countTrue([]) ➞ 0
# Notes
# Return 0 if given an empty array.
# All array items are of the type bool (true or false).

def truefalse(array)
  sum = 0

array.each do |single|
  if single == true
    sum += 1
  end
end

  return sum
end


p truefalse([true, false, false, true, false])
# Less Than 100?
# Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false.

# Examples
# lessThan100(22, 15) ➞ true
# // 22 + 15 = 37

# lessThan100(83, 34) ➞ false
# // 83 + 34 = 117

# lessThan100(3, 77) ➞ true

def lessthan100(number, number2)

  sum = number + number2

  if sum < 100
    return true
  else 
    return false
  end
end

p lessthan100(44,64)
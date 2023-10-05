# You are given two parameters, an array and a number. Return a hash whose keys are each of the values from the array parameter, and whose values are the number parameter.

# Input:

# First argument: ["a", "e", "i", "o", "u"]
# Second argument: 1

# Output:

# {
# 'a' => 1,
# 'e' => 1,
# 'i' => 1,
# 'o' => 1,
# 'u' => 1
# }

def etl(array, number)
  i = 0
  hash = {}
  result_hash = {}

  while i < array.length
    if hash[array[i]]
      hash[array[i]] += 1
    else
      hash[array[i]] = 1
    end
    i += 1
  end

  hash.each do |key, value|
    if value == number
      result_hash[key] = value
    end
  end

  return result_hash
end

p etl(["a", "e", "i", "o", "u"], 1)


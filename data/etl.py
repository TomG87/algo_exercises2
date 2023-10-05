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

def etl(array, number):
  i = 0
  hash = {}
  newHash = {}

  while i < len(array):
    if hash.get(array[i]):
      hash[array[i]] += 1
    else:
      hash[array[i]] = 1
    i += 1

  for key in hash:
    if hash[key] == number:
      newHash[key] = hash[key]
  
  return newHash

print(etl(["a", "e", "i", "o", "u"], 1))

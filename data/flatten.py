# Given a hash, return a flat array containing all the hash’s keys and values.

# Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
# Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

def flatten(hash):
  newArray = []

  for key in hash:
    newArray.append(key)
    newArray.append(hash[key])

  return newArray

print(flatten({ "a": 1, "b": 2, "c": 3, "d": 4 }))
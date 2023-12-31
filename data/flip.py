# Given a hash, create a new hash that has the keys and values switched.

# Input: {"a" => 1, "b" => 2, "c" => 3}
# Output: {1 => "a", 2 => "b", 3 => "c"}

def flip(hash):
  newHash = {}

  for key in hash:
    newHash[hash[key]] = key

  
  return newHash
  
print(flip({ "a": 1, "b": 2, "c": 3 }))
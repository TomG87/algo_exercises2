# Given a hash, return a flat array containing all the hash’s keys and values.

# Input: {“a” => 1, “b” => 2, “c” => 3, “d” => 4}
# Output: [“a”, 1, “b”, 2, “c”, 3, “d”, 4]

def flatten(hash)

  i = 0
  new_array = []

  hash.each do |key, value|
    new_array.push(key, value)
  end

  return new_array
end

p flatten({"a" => 1, "b" => 2, "c" => 3, "d" => 4})

# hash = {"a" => 1, "b" => 2, "c" => 3, "d" => 4}
# new_array = []
# hash.each do |key, value|

#   new_array << key && new_array << value
# end

# p new_array
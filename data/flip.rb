# Given a hash, create a new hash that has the keys and values switched.

# Input: {"a" => 1, "b" => 2, "c" => 3}
# Output: {1 => "a", 2 => "b", 3 => "c"}

def flip(hash)

  new_hash = {}

  hash.each do |key, value|
    new_hash[value] = key
  end

  return new_hash

end

p flip({"a" => 1, "b" => 2, "c" => 3})

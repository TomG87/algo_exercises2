# A given string contains all the letters from the alphabet except for one. Return the missing letter.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: “The quick brown box jumps over a lazy dog”
# Output: “f”

def letter(string)
  alphabet = "abcdefghijklmnopqrstuvwxyz"

  alphabet.each_char do |letter|
    return letter unless string.downcase.include?(letter)
  end

end



p letter("The quick brown box jumps over a lazy dog")

  
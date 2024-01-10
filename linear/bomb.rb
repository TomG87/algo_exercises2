# Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

def bomb(string)

  if string.downcase.include?("bomb")
    return "Duck!!!"
  else
    return "There is no bomb, relax."
  end
end

p bomb("There is a bomb")
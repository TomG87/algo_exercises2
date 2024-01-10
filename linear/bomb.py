# Create a function that finds the word "bomb" in the given string (not case sensitive). If found, return "Duck!!!", otherwise return "There is no bomb, relax.".

def bomb(string):
  if "bomb" in string.lower():
    return "Duck!!!"
  else:
    return "There is no bomb, relax."
  
print(bomb("There is a bomb"))
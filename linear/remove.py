# Create a function that removes the first and last characters from a string.

def removeChar(string):

  newString = ""

  if len(string) <= 2:
    return string
  else:
    newString =string[1:-1]
  return newString

print(removeChar("hello"))
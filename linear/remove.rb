# Create a function that removes the first and last characters from a string.

def removechar(string)

  newstring = ""
  
  
    if string.length <= 2
      return string
    else
      newstring = string.split("")[1..-2].join
    end
  
    return newstring
  end
  
  p removechar("he")
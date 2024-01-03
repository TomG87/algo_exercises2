def check_if_in(list_of_strings, other_string):
  
  for string in list_of_strings:
    if string in other_string:
      return True
  return False

list_of_strings = ["hello", "world"]
other_string = "hello world"

print(check_if_in(list_of_strings, other_string))
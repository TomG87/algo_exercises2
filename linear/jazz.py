# Create a function that takes an object and returns the keys and values as separate arrays. Return the keys sorted alphabetically, and their corresponding values in the same order.

# Examples
# keysAndValues({ a: 1, b: 2, c: 3 })
# ➞ [["a", "b", "c"], [1, 2, 3]]

# keysAndValues({ a: "Apple", b: "Microsoft", c: "Google" })
# ➞ [["a", "b", "c"], ["Apple", "Microsoft", "Google"]]

# keysAndValues({ key1: true, key2: false, key3: undefined })
# ➞ [["key1", "key2", "key3"], [true, false, undefined]]


def jazz(array):

  newArray = []

  for single in array:
    if "7" in single:
      newArray.append(single)
    else:
      newIndex = str(single) +"7"
      newArray.append(newIndex)
  return newArray

print(jazz(["Dm", "G", "E", "A"]))
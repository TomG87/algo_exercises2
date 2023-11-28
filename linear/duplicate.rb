# A given array has one pair of duplicate values. Return the first duplicate value.

# NOTE: You must accomplish this in O(n) time. This is also known as linear time.

# Input: [5, 2, 9, 7, 2, 6]
# Output: 2

# def duplicate(array)

#   i = 0
#   j = 1

#  while i < array.length
#   if array[i] == array[j]
#     return array[i]
#   end
#   i += 1
#   j += 1
#   end
# end


#   p duplicate([5, 2, 9, 7, 2, 6])

  def duplicate(array)
    i = 0
  
    while i < array.length - 1
      j = i + 1
      
      while j < array.length
        if array[i] == array[j]
          return array[i]
        end
  
        j += 1
      end
  
      i += 1
    end
  
    # No duplicates found
    return nil
  end


  p duplicate([5, 2, 9, 7, 2, 6]) 
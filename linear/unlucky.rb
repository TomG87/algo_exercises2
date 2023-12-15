# Given a sorted array of numbers, remove any numbers that are divisible by 13. Return the amended array.

def unlucky(array)

  new_array = []

  array.each do |number|
    if number % 13 != 0
      new_array << number
    end
  end

  return new_array
end

p unlucky([53, 182, 435, 591, 637])
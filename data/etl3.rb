def etl3(array, array2)
  i = 0
  new_array = []
 
  while i < array.length
    author_id = array[i][:author_id]
    
    # Find the corresponding author in array2
    matching_author = array2.find { |author| author[:id] == author_id }
    
    if matching_author && array[i][:views] > 100
      new_array << {
        title: array[i][:title],
        views: array[i][:views],
        author_name: "#{matching_author[:first_name]} #{matching_author[:last_name]}"
      }
    end

    i += 1
  end

  return new_array
end

p etl3([
  {title: 'How to Make Wood', author_id: 4, views: 6},
  {title: 'How to Seem Perfect', author_id: 4, views: 111},
  {title: 'Review of the New "Unbreakable Mug"', author_id: 2, views: 202},
  {title: 'Why Pigs Stink', author_id: 1, views: 12}
],
[
  {id: 1, first_name: 'Jazz', last_name: 'Callahan'},
  {id: 2, first_name: 'Ichabod', last_name: 'Loadbearer'},
  {id: 3, first_name: 'Saron', last_name: 'Kim'},
  {id: 4, first_name: 'Teena', last_name: 'Burgess'},
])

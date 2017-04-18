# Objectives
# 1) Create a method that prints the value for the key "species"
# 2) Create a method that will print the name and rating values in the bear_friend hash
# 3) print the slogan defined in 'scruff'.  If it's not defined, then say "guess there's no slogan here!!"
# 4) Method that puts the key, value pair if the value is "Scruff McGruff"

require 'pry'

@scruff = {
  name: 'Scruff McGruff',
  address: 'Chicago, IL 60652',
  slogan: 'Help take a bite out of crime!',
  species: 'Anthropomorphic animated dog',
  birth_year: 1980,
  communication_mediums: [
    'television',
    'newspaper',
    'billboards',
    'radio'
  ],
  bear_friend: {
    name: 'Smokey the Bear',
    rating: 10
  },
  owner: 'Jack Keil'
}

# 1)
def printsValueOfSpecies(dog)
  puts "#{dog[:species]}"
end

printsValueOfSpecies(@scruff)

# 2)
def printsNameAndRatingOfBearFriendHash(dog)
  puts "#{dog[:bear_friend][:name]} #{dog[:bear_friend][:rating]}"
end

printsNameAndRatingOfBearFriendHash(@scruff)

# 3)
def printsSlogan(dog)
  if dog[:slogan] != nil
    puts "#{dog[:slogan]}"
  else
    puts "guess there's no slogan here!!"
  end
end

printsSlogan(@scruff)

# 4)
def printsKeyValuePair(dog)
  dog.each do |key, value|
    if value == "Scruff McGruff"
      puts "#{key} #{value}"
    end
  end
end

printsKeyValuePair(@scruff)

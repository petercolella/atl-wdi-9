shopping_list = ['peanuts', 'pretzels', 'coffee', 'pretzel sticks', 'fruit snacks', 'pretzel nuggets']

# puts "hey what's your name?"
# name = gets.chomp

# puts "hey #{name}, i'm a robot"

# Exercise One
# puts "What would you like to add to the shopping list?"
# newListItem = gets.chomp
# shopping_list << newListItem

# puts "#{newListItem} was added to the shopping list."

# Exercise Two
# puts "What would you like to remove from the shopping list?"
# newListItem = gets.chomp
# shopping_list.delete(newListItem)

# puts "#{newListItem} was removed from the shopping list."

# Exercise Three
# shopping_list.delete(shopping_list[1])
# shopping_list.insert(1,"ice cream")

# Exercise Four
# shopping_list.reverse.each do |listItem|
# 	puts "#{listItem}"
# end

# Exercise Five
# shopping_list.each_with_index do |listItem, index|
# 	puts "#{index + 1}. #{listItem}"
# end

# Exercise Six
# puts "#{shopping_list[0].length ** 2}"
# puts "Give me a number."
# number = gets.chomp
# puts "#{number.to_i + shopping_list[0].length ** 2}

# Exercise Seven
# puts shopping_list.length.even?

# Exercise Eight
if shopping_list[1][0] == "a"
	puts "The second item starts with the letter A!"
else
	puts "Nope, starts with a different letter."
end

puts "#{shopping_list}"
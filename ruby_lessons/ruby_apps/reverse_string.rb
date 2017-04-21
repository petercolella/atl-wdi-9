string = "yellow"

def string_reverse(string)
	result = []
	split_string = string.split('')
	split_string.each do |letter|
		result.unshift(letter)
	end
	result.join('')
	puts result
end

puts 'Hello'
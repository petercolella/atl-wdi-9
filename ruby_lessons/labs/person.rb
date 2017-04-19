class Person

	attr_accessor :name, :second_name, :age
	# attr_reader :age

	def initialize(name:, age:)
		@name = name
		@age = age
		# @second_name = second_name
	end

	def to_s
		"Name: #{@name}, Age: #{@age}"
	end

	def oldEnoughToVote
		@age >= 18
		# if @age > 17
		# 	puts "#{@name} is old enough to vote."
		# else
		# 	puts "#{@name} is too young to vote."
		# end
	end

	def say_name
		puts "Hi, my name is " + @name + "."
	end

	def say_age
		puts "I an #{@age} years old."
	end

end

class LoudPerson < Person
	def say_name
		puts "HEY YOU, MY NAME IS #{@name.upcase}!"
	end
end

class QuietPerson < Person
	def say_name
		puts "Um, pardon me, my name is #{@name}..."
	end
end

class VeryLoudPerson < LoudPerson
	def say_age
		puts "YO, I AM #{@age} YEARS OLD, DAMMIT!"
	end
end

class TwoHeadedPerson < Person
	def initialize(name:, age:, second_name:)
		super(name: name, age: age)
		@second_name = second_name
	end

	def say_name
		# @second_name = second_name
		puts "Hi, our names are #{@name} and #{@second_name}."
	end
end

neil = Person.new(name: 'Neil', age: 46)
felicia = LoudPerson.new(name: 'Felicia', age: 24)
person = Person.new(age: 34, name: 'Josh')
young_person = Person.new(age: 15, name: 'Bob')
quiet_person = QuietPerson.new(name: 'Lanchana', age: 25)
very_loud_person = VeryLoudPerson.new(name: 'Harry', age: 26)
two_headed_person = TwoHeadedPerson.new(name: 'Yin', second_name: 'Yang', age: 64)


puts neil.say_name
puts felicia.say_name
puts quiet_person.say_name
puts very_loud_person.say_name
puts very_loud_person.say_age
puts two_headed_person.say_name

puts person.oldEnoughToVote
puts young_person.oldEnoughToVote

puts felicia

class Pet
	attr_reader :type, :age
	attr_accessor :name

	def initialize(name, type, age)
		@name = name
		@type = type
		@age = age
	end

	def to_s
	"#{@name} is a #{age} year old #{@type}."
	end

	def increment_age
		@age += 1
	end
end

miko = Pet.new("Miko", "Dog", 17)
ginger = Pet.new("Ginger", "Cat", 3)
puts miko
puts ginger 

# puts miko.to_s
# puts ginger.to_s

puts miko.name

miko.name = "Liam"

puts miko.name
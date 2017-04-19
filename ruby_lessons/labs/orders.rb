class Order
	attr_accessor :total_price, :notes
	attr_writer :total_tax, :misc_fees, :shipping_address, :store_address
	# shipping_fees

	def initialize(total_price: 0.00, total_tax: 0.00, shipping_fees: 5.00, misc_fees: 0.00, notes: '', shipping_address: '', store_address: '')
		@total_price = total_price
		@total_tax = total_tax
		@shipping_fees = shipping_fees
		@misc_fees = misc_fees
		@notes = notes
		@shipping_address = shipping_address
		@store_address = store_address
	end

	def to_s
		"#{@total_price} : #{@total_tax} : #{@shipping_fees} : #{@misc_fees} : #{@notes}"
	end

	def total_price
		@total_price + @total_tax + @shipping_fees + @misc_fees
	end

	def total_tax
		puts "shipping address: #{@shipping_address}"
		puts "store address: #{@store_address}"
		@total_tax = calculate_tax(
									shipping_address: @shipping_address,
									store_address: @store_address,
									total_price: @total_price
								)
	end

end

def calculate_tax(shipping_address:, store_address:, total_price:)
	2.22
end

some_order = Order.new(
						total_price: 123.45,
						total_tax: 1.23,
						shipping_fees: 2.34,
						misc_fees: 3.45,
						notes: 'some notes'
					)

puts some_order
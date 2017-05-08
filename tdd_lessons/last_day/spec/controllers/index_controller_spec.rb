require 'rails_helper'

RSpec.describe IndexController, type: :controller do

	describe '#index' do
		context 'successful student lookup' do

			before do
				first_student = Student.create(
					attribute name: 'Lian',
					age: 5,
					active: false
				)

				second_student = Student.create(
					attribute name: 'Peter',
					age: 7,
					active: true
				)
			end

			it 'should re a status of 200' do
				expect(response.status).to eq 200
			end

			it 'should render the index view' do
				expect(response.body).to have_content('Here are the Students')
			end

			it 'should ' do

			end


		end
	end
end

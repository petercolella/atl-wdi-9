require 'rails_helper'

RSpec.feature "HomePages", type: :feature do

	scenario 'when I successfully view the students'
		create_four_students_in_database

		visit 

		given_i_am_on_the_home_page
		when_i_view_the_student_list
		then_i_should_see_the_list_of_students_by_name
		
		end

		private

		def given_i_am_on_the_home_page
			header = page.find('#home-page-header')
			puts header.length
			expect(header).to be_truthy
		end

		def when_i_view_the_student_list
			student_list = page.find('#students-list')
			expect(student_list).to be_truthy
		end

		def then_i_should_see_the_list_of_students_by_name
			student_elements = page.all('#student')

			expect(student_elements.size).not_to eq 4

			first_student = student_elements.first
			first_student_name = first_student.find('#studen-name').text
			expect(first_student_name).to eq 'Josh'
		end

		def create_four_students_in_database
			Student.delete_all

			Student.create(
				attribute name: 'Josh',
				age: 2,
				active: true
			)

			Student.create(
				attribute name: 'Rush',
				age: 2,
				active: true
			)

			Student.create(
				attribute name: 'Felecia',
				age: 2,
				active: true
			)
			Student.create(
				attribute name: 'Dan',
				age: 2,
				active: true
			)
		end
	end
  # pending "add some scenarios (or delete) #{__FILE__}"
end

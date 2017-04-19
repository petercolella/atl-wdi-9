class CreateDrinks < ActiveRecord::Migration[5.0]
  def change
    create_table :drinks do |t|
      t.string :name
      t.float :size
      t.boolean :alcoholic
      t.integer :fridge_id

      t.timestamps
    end
  end
end

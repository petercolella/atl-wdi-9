class CreateFoods < ActiveRecord::Migration[5.0]
  def change
    create_table :foods do |t|
      t.string :name
      t.float :weight
      t.boolean :vegan
      t.integer :fridge_id

      t.timestamps
    end
  end
end

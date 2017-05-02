class CreateNotes < ActiveRecord::Migration[5.0]
  def change
    create_table :notes do |t|
      t.string :body
      t.string :title

      t.timestamps
    end
  end
end

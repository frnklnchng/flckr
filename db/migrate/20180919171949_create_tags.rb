class CreateTags < ActiveRecord::Migration[5.2]
  def change
    create_table :tags do |t|
      t.string :label, null: false
      t.integer :photo_id, null: false

      t.timestamps
    end

    add_index :tags, :photo_id
    add_index :tags, [:id, :photo_id], unique: true
  end
end

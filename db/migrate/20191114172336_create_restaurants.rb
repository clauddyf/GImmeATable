class CreateRestaurants < ActiveRecord::Migration[5.2]
  def change
    create_table :restaurants do |t|
      t.string :location
      t.integer :num_of_views
      t.text :description
      t.integer :rating
      t.string :cuisine_type
      
      t.timestamps
    end
  end
end

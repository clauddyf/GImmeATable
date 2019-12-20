class Addcolumntorestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :open, :integer
    add_column :restaurants, :close, :integer
    remove_column :restaurants, :cuise_type
  end
end

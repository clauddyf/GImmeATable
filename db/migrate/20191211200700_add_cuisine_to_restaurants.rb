class AddCuisineToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :cuise_type, :string
  end
end

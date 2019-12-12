class AddColumnToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :hours_op, :string
    add_column :restaurants, :address, :string
    add_column :restaurants, :neighborhood, :string
    add_column :restaurants, :phone_num, :string
    add_column :restaurants, :city_id, :integer
    add_column :restaurants, :pricing, :integer
    add_column :restaurants, :num_stars, :integer
  end
end

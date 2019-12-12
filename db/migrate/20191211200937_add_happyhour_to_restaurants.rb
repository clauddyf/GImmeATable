class AddHappyhourToRestaurants < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :happy_hour, :string
  end
end

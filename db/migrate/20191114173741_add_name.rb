class AddName < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :name, :string
  end
end

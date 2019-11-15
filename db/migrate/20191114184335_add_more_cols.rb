class AddMoreCols < ActiveRecord::Migration[5.2]
  def change
    add_column :restaurants, :dresscode, :string
    add_column :restaurants, :dining_style, :string
  end
end

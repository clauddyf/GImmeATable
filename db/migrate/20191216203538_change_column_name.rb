class ChangeColumnName < ActiveRecord::Migration[5.2]
  def change
    rename_column :locations, :location, :cityname
  end
end

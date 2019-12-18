class CreateReservations < ActiveRecord::Migration[5.2]
  def change
    create_table :reservations do |t|
      t.integer :user_id
      t.integer :restaurant_id
      t.date :date
      t.integer :time_id
      t.integer :head_count
      t.timestamps
    end
  end
end

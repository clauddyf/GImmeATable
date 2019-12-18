class CreateTimeSlots < ActiveRecord::Migration[5.2]
  def change
    create_table :time_slots do |t|
      t.integer :time, null: false
      t.timestamps
    end
  end
end

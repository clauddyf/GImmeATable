class Review < ApplicationRecord
    validates :body, :user_id, :restaurant_id, null: false

    
    belongs_to :user
    belongs_to :restaurant
end

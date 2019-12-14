class Restaurant < ApplicationRecord
    validates :description, :location, :name, :num_of_views, presence: true
    
    # belongs_to :location, foreign_key: "city_id", primary_key: "id"
    has_many_attached :photos


end

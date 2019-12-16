class Restaurant < ApplicationRecord
    validates :description, :location, :name, :num_of_views, presence: true
    
    belongs_to :location, foreign_key: "location"
    has_many_attached :photos


end

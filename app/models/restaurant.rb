class Restaurant < ApplicationRecord
    validates :description, :name, :num_of_views, presence: true
    
    belongs_to :location, class_name: :Location, foreign_key: :city_id
    has_many_attached :photos


end

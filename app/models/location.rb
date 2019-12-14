class Location < ApplicationRecord
    validates :location, presence: true
    has_many :restaurants, foreign_key: "location", primary_key: "location"
    has_many_attached :photos

    def count
        self.restaurants.count('id')
    end
end

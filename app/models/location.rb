class Location < ApplicationRecord
    validates :cityname, presence: true
    has_many :restaurants, foreign_key: "location"
    has_many_attached :photos

    def count
        self.restaurants.count('id')
    end
end

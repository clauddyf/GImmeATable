class Location < ApplicationRecord
    validates :cityname, presence: true
    has_many :restaurants, class_name: :Restaurant, foreign_key: :city_id
    has_many_attached :photos

    def count
        self.restaurants.count('id')
    end
end

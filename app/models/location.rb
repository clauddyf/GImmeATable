class Location < ApplicationRecord
    validates :cityname, presence: true
    has_many :restaurants, class_name: :Restaurant, foreign_key: :city_id
    # has_many :reservations,
    #     through: :restaurants,
    #     foreign_key: :restaurant_id
    has_many_attached :photos

    def count
        self.restaurants.count('id')
    end

    # def self.search_by_city(query)
    #     param = '%' + query.downcase + '%'
    #     Location.where('lower(cityname) LIKE ?', param).limit(10)
    #   end
      
    #   def self.search_by_cuisine(query)
    #     param = '%' + query.downcase + '%'
    #     Restaurant.where('lower(cuisine_type) LIKE ?', param).limit(10)
    #   end
      
    #   def self.search_results(query)
    #     param = '%' + query.downcase + '%'
    #     by_name = Restaurant.where('lower(name) LIKE ?', param).limit(10)
    #     by_name + search_by_city(query) + search_by_cuisine(query)
    #   end
end

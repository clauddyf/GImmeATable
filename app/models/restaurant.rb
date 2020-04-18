class Restaurant < ApplicationRecord
    validates :description, :name, :num_of_views, presence: true
    
    belongs_to :location, class_name: :Location, foreign_key: :city_id
    has_many :reviews,
      foreign_key: :restaurant_id
    has_many_attached :photos
    has_many :reservations,
        foreign_key: :restaurant_id
    
    
    def self.search_by_city(query)
      param = '%' + query.downcase + '%'
      Location.where('lower(cityname) LIKE ?', param).limit(10)
    end
    
    def self.search_by_cuisine(query)
      param = '%' + query.downcase + '%'
      Restaurant.where('lower(cuisine_type) LIKE ?', param).limit(10)
    end
    
    def self.search_results(query)
      param = '%' + query.downcase + '%'
      by_name = Restaurant.where('lower(name) LIKE ?', param).limit(10)
      by_name + search_by_city(query) + search_by_cuisine(query)
    end
end

# Restaurant.where('lower(name) LIKE ?', '%%').limit(10) + Location.where('lower(cityname) LIKE ?', '%clinton%').limit(10) + Restaurant.where('lower(cuisine_type) LIKE ?', '%%').limit(10)
# Restaurant.find()
# Location.find(id = param)

# Restaurant.select_all("SELECT * FROM restaurants WHERE restaurants.city_id = '4'")

#   SELECT locations.* FROM locations WHERE id = param

# )
#  This worked: Restaurant.where('city_id = ?', (Location.find(param))) )
#  SELECT locations.id FROM locations WHERE cityname = 'Austin'

# Location.find_by_sql("SELECT locations.id FROM locations WHERE cityname = 'Austin' ")
# Restaurant.where('city_id = ?', (Location.find_by_sql("SELECT locations.id FROM locations WHERE lower(cityname) = 'portland' ")) )
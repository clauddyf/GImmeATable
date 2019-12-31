class Restaurant < ApplicationRecord
    validates :description, :name, :num_of_views, presence: true
    
    belongs_to :location, class_name: :Location, foreign_key: :city_id
    has_many :reviews
    has_many_attached :photos
    
    # debugger
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

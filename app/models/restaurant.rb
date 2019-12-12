class Restaurant < ApplicationRecord
    validates :description, :location, :name, :num_of_views, :cuisine_type, :happy_hour, presence: true

end

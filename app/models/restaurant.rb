class Restaurant < ApplicationRecord
    validates :description, :location, :name, :num_of_views, presence: true

    has_many_attached :photos

end

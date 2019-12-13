class Restaurant < ApplicationRecord
    validates :description, :location, :name, :num_of_views, presence: true

    has_one_attached :photo

end

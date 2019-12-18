class Reservation < ApplicationRecord
    belongs_to :time_slot, 
        class_name: "TimeSlot", 
        foreign_key: :time_id, 
        primary_key: :id

    belongs_to :restaurant
    belongs_to :user

    validates :user, presence: true
    validates :restaurant, presence: true

    validate :time_aint_over
    # validates :date_aint_too_faraway
    # validates :within_biniz_hours
    # validates :head_count_within_limit

    def time_aint_over
        time_now = Time.zone.now()
        date = self.date
        time_then = date.in_time_zone('EST') + self.time_slot.time.minutes
        if time_then < time_now 
            errors[:Time] = 'This time has unfortunately passed'
        end
    end

    def to_json 
        Jbuilder.new do |reservation|
            reservation.name restaurant.name
            reservation.user_id user_id
            reservations.rest_id restaurant_id
            reservation.date date
            reservation.time time_slot.to_jbuilder
        end
    end

end

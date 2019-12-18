class TimeSlot < ApplicationRecord
    def time_str
        hours = self.time /60
        minutes = self.time % 60
        str =''
        str << ((hours < 10) ? "0#{hours}" : hours.to_s)
        str << ':'
        str << ((minutes < 10) ? "0#{minutes}" : minutes.to_s)
        return str
    end

    def to_jbuilder
        Jbuilder.new do |time_slot|
            time_slot.(self, :id, :time)
        end
    end

end

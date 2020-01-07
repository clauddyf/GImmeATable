if user
    json.extract! user, :id, :email, :first_name, :reservations, :reviews
else
 {}
end

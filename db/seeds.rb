# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'open-uri'
require 'csv'


Restaurant.destroy_all

csv_text = File.read(Rails.root.join('db','lib','seeds_3master.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    t = Restaurant.new
    t.location = row['location']
    t.name = row['name']
    t.description = row['description']
    t.hours_op = row['hours_op']
    t.dresscode = row['dresscode']
    t.address = row['address']
    t.neighborhood = row['neighborhood']
    t.website = row['website']
    t.city_id = row['city_id']
    t.phone_num= row['phone-number']
    t.pricing = row['pricing']
    t.cuisine_type = row['cuisine type']
    t.num_stars = row['num stars']
    t.num_of_views = row['num_of_views']
    t.save!
    puts "#{t.name}, #{t.location} saved"
end
puts "There are now #{Restaurant.count} rows in the Restaurant table"

# first_res.save!
# p file
# first_res = Restaurant.create(name: 'Cafe Claudius', description:'Close to Union Square and closer to Paris, 
# Café Claude has remained an unpretentious neighborhood meeting place nestled amongst the urban skyscrapers. Café Claude is a classic Bistro, Gallic waiters, and Paris Bistro style menu. Enjoy a bubbly atmosphere',
# dresscode: 'Business Casual', dining_style: 'Casual Elegant', num_of_views: 22, location: 'Oakland', rating: 4.5, cuisine_type: 'Jamaican', happy_hour: '5pm - 8pm')

# file = open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/res_0.jpg")
# first_res.photos.attach(io: file, filename: 'res_0.jpg')
# # p first_res.photos

Restaurant.all.each_with_index do |restaurant, idx|
    file = open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/res_#{idx}.jpg")
    restaurant.photos.attach(io: file, filename: "res_#{idx}.jpg")
end


# restaurant.photo.attach(io: file, filename: `res_#{idx}.jpg`)



# User.destroy_all

# new_guy = User.new(email:'demouser@gmail.com', password: 'password', first_name: 'guest', last_name:'user', city: 'Oakland')
# new_guy.save!
# another_guy = User.new(email:'anotherdemo@gmail.com', password: 'password', first_name: 'Ariel', last_name:'Solomon', city: 'Oakland')
# another_guy.save!

# Restaurant.destroy_all

# first_res = Restaurant.new(name: 'Cafe Claudius', description:'Close to Union Square and closer to Paris, 
#     Café Claude has remained an unpretentious neighborhood meeting place nestled amongst the urban skyscrapers. Café Claude is a classic Bistro, Gallic waiters, and Paris Bistro style menu. Enjoy a bubbly atmosphere',
#  dresscode: 'Business Casual', dining_style: 'Casual Elegant', num_of_views: 22, location: 'Oakland', rating: 4.5, cuisine_type: 'Jamaican', happy_hour: '5pm - 8pm')
# first_res.save!
# sec_res = Restaurant.new(name: 'Good Burger', description:'Close to Mondo Burger, Good Burger is a great small business with amazing sauce', dresscode: 'Regular ', dining_style: 'Fast food', num_of_views: 1997, location: 'San Francisco', rating: 4.2, cuisine_type: 'Classic American', happy_hour: '4pm - 7pm')
# sec_res.save!


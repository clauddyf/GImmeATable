# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



require 'open-uri'
require 'csv'


Location.destroy_all
Restaurant.destroy_all
User.destroy_all



SanFrancisco = Location.create!(id: 1,cityname: 'San Francisco')
Phoenix = Location.create!(id: 2, cityname: 'Phoenix')
NOLA = Location.create!(id: 3,cityname: 'New Orleans')
Portland = Location.create!(id: 4,cityname: 'Portland')
Chicago = Location.create!(id: 5,cityname: 'Chicago')
Austin = Location.create!(id: 6,cityname: 'Austin')
NewYork = Location.create!(id: 7,cityname: 'New York')
LasVegas = Location.create!(id: 8,cityname: 'Las Vegas')
Denver = Location.create!(id: 9,cityname: 'Denver')
Seattle = Location.create!(id: 10, cityname: 'Seattle')

Location.all.each_with_index do |location, idx|
    file = open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/loc_#{idx}.jpg")
    location.photos.attach(io: file, filename: "loc_#{idx}.jpg")
    puts "#{location.cityname} photos have been saved"
end
Location.all.each_with_index do |location, idx|
    file = open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_#{idx}.jpg")
    location.photos.attach(io: file, filename: "locshow_#{idx}.jpg")
    puts "#{location.cityname} second photos have been saved"
end
csv_text = File.read(Rails.root.join('db','lib','finalSeed.csv'))
csv = CSV.parse(csv_text, :headers => true, :encoding => 'ISO-8859-1')
csv.each do |row|
    t = Restaurant.new
    
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
    t.open = row['open']
    t.close = row['close']
    t.num_stars = row['num stars']
    t.num_of_views = row['num_of_views']
    t.save!
    puts "#{t.name} saved"
end
puts "There are now #{Restaurant.count} rows in the Restaurant table"
Restaurant.all.each_with_index do |restaurant, idx|
    puts "#{idx} for #{restaurant.name}"
    file = open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/res_#{idx}.jpg")
    restaurant.photos.attach(io: file, filename: "res_#{idx}.jpg")
    puts "#{restaurant.name} photos have been saved"
end
puts "All photos have been saved"

another_guy = User.new(email:'anotherdemo@gmail.com', password: 'password', first_name: 'Guest', last_name:'User', city: 'Oakland')
another_guy.save!
# Location.first.photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_0.jpg"), filename: "locshow_0.jpg")
# Location.all[1].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_1.jpg"), filename: "locshow_1.jpg")
# Location.all[2].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_2.jpg"), filename: "locshow_2.jpg")
# Location.all[3].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_3.jpg"), filename: "locshow_3.jpg")
# Location.all[4].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_4.jpg"), filename: "locshow_4.jpg")
# Location.all[5].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_5.jpg"), filename: "locshow_5.jpg")
# Location.all[6].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_6.jpg"), filename: "locshow_6.jpg")
# Location.all[7].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_7.jpg"), filename: "locshow_7.jpg")
# Location.all[8].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_8.jpg"), filename: "locshow_8.jpg")
# Location.all[9].photos.attach(io: open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/locshow_9.jpg"), filename: "locshow_9.jpg")
# # first_res.save!
# # p file
# # first_res = Restaurant.create(name: 'Cafe Claudius', description:'Close to Union Square and closer to Paris, 
# # Café Claude has remained an unpretentious neighborhood meeting place nestled amongst the urban skyscrapers. Café Claude is a classic Bistro, Gallic waiters, and Paris Bistro style menu. Enjoy a bubbly atmosphere',
# # dresscode: 'Business Casual', dining_style: 'Casual Elegant', num_of_views: 22, location: 'Oakland', rating: 4.5, cuisine_type: 'Jamaican', happy_hour: '5pm - 8pm')

# # file = open("https://gimmeatable-dev.s3-us-west-1.amazonaws.com/res_0.jpg")
# # first_res.photos.attach(io: file, filename: 'res_0.jpg')
# # # p first_res.photos


# sf, phoenix, portland,nola, chicago, Austin, NY, Des Moines, Las Vegas,Denver,Seattle,
# restaurant.photo.attach(io: file, filename: `res_#{idx}.jpg`)




# new_guy = User.new(email:'demouser@gmail.com', password: 'password', first_name: 'guest', last_name:'user', city: 'Oakland')
# new_guy.save!

# Restaurant.destroy_all

# first_res = Restaurant.new(name: 'Cafe Claudius', description:'Close to Union Square and closer to Paris, 
#     Café Claude has remained an unpretentious neighborhood meeting place nestled amongst the urban skyscrapers. Café Claude is a classic Bistro, Gallic waiters, and Paris Bistro style menu. Enjoy a bubbly atmosphere',
#  dresscode: 'Business Casual', dining_style: 'Casual Elegant', num_of_views: 22, location: 'Oakland', rating: 4.5, cuisine_type: 'Jamaican', happy_hour: '5pm - 8pm')
# first_res.save!
# sec_res = Restaurant.new(name: 'Good Burger', description:'Close to Mondo Burger, Good Burger is a great small business with amazing sauce', dresscode: 'Regular ', dining_style: 'Fast food', num_of_views: 1997, location: 'San Francisco', rating: 4.2, cuisine_type: 'Classic American', happy_hour: '4pm - 7pm')
# sec_res.save!


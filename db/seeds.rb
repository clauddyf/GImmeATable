# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all

new_guy = User.new(email:'demouser@gmail.com', password: 'password', first_name: 'guest', last_name:'user', city: 'Oakland')
new_guy.save!
another_guy = User.new(email:'anotherdemo@gmail.com', password: 'password', first_name: 'Ariel', last_name:'Solomon', city: 'Oakland')
another_guy.save!

Restaurant.destroy_all

first_res = Restaurant.new(name: 'Cafe Claudius', description:'Close to Union Square and closer to Paris, 
    Café Claude has remained an unpretentious neighborhood meeting place nestled amongst the urban skyscrapers. Café Claude is a classic Bistro, Gallic waiters, and Paris Bistro style menu. Enjoy a bubbly atmosphere',
 dresscode: 'Business Casual', dining_style: 'Casual Elegant', num_of_views: 22, location: 'Oakland', rating: 4.5, cuisine_type: 'Jamaican', happy_hour: '5pm - 8pm')
first_res.save!
sec_res = Restaurant.new(name: 'Good Burger', description:'Close to Mondo Burger, Good Burger is a great small business with amazing sauce', dresscode: 'Regular ', dining_style: 'Fast food', num_of_views: 1997, location: 'San Francisco', rating: 4.2, cuisine_type: 'Classic American', happy_hour: '4pm - 7pm')
sec_res.save!


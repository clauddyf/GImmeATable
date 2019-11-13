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
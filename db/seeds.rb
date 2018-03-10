# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all

10.times do
  user = User.create(name: Faker::LordOfTheRings.unique.character, email: Faker::Internet.unique.email, password: '123123')
  rand(0..5).times do
    Question.create(title: Faker::Company.unique.buzzword, body: Faker::StarWars.unique.quote, author_id: user.id)
  end
end

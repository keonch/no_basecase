# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(
  name: 'GoodGuest123',
  email: 'goodguest@nobasecase.com',
  password: 'goodguest'
)

user1 = User.create(
  name: 'user123',
  email: 'demo1@nobasecase.com',
  password: '123123'
)

Question.create(
  title: 'How do I redirect to another webpage?',
  body: 'How can I redirect the user from one page to another using jQuery or pure JavaScript?',
  trunc_body: 'How can I redirect the user from one page to another using jQuery or pure JavaScript?',
  author_id: user1.id
)

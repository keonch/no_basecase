# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.destroy_all
Question.destroy_all
Answer.destroy_all
UserVote.destroy_all

User.create(name: 'goodGuest123', email: 'goodGuest123@nobasecase.com', password: 'goodGuest123')

users = []
100.times do
  user = User.create(name: Faker::Hipster.unique.word, email: Faker::Internet.unique.email, password: '123123')
  users.push(user)
end

questions = [
  [
    "How to undo the most recent commits in Git",
    "I accidentally committed wrong files to Git, but I haven't pushed the commit to the server yet. How can I undo those commits from the local repository?"
  ],

  [
    "How do I delete a Git branch both locally and remotely?",
    "I want to delete a branch both locally and on my remote project fork on GitHub."
  ],

  [
    "How do I pick randomly from an array?",
    "I want to know if there is a much cleaner way of doing this. Basically, I want to pick a random element from an array of variable length."
  ],

  [
    "What is the difference between 'git pull' and 'git fetch'?",
    "What are the differences between git pull and git fetch?"
  ],

  [
    "What is the correct JSON content type?",
    "I've been messing around with JSON for some time, just pushing it out as text and it hasn't hurt anybody (that I know of), but I'd like to start doing things properly."
  ],

  [
    "What does the “yield” keyword do?",
    "What is the use of the yield keyword in Python? What does it do?"
  ],

  [
    "How to modify existing, unpushed commits?",
    "I wrote the wrong thing in a commit message. Alternatively, I've forgotten to include some files. How can I change the commit message/files? The commit has not been pushed yet."
  ],

  [
    "How do I redirect to another webpage?",
    "How can I redirect the user from one page to another using jQuery or pure JavaScript?"
  ],

  [
    "How do JavaScript closures work?",
    "How would you explain JavaScript closures to someone with a knowledge of the concepts they consist of (for example functions, variables and the like), but does not understand closures themselves?
    I have seen the Scheme example given on Wikipedia, but unfortunately it did not help."
  ],

  [
    "How to check whether a string contains a substring in JavaScript?",
    "Usually I would expect a String.contains() method but there doesn't seem to be one. What is a reasonable way to check for this?"
  ],

  [
    "Why does my JavaScript get a “No 'Access-Control-Allow-Origin' header is present on the requested resource” error when Postman does not?",
    "I am trying to do authorization using JavaScript by connecting to the RESTful API built in Flask. However, when I make the request, I get the following error:
    XMLHttpRequest cannot load http://myApiUrl/login. No 'Access-Control-Allow-Origin' header is present on the requested resource. Origin 'null' is therefore not allowed access."
  ],

  [
    "How do you display code snippets in MS Word preserving format and syntax highlighting?",
    "Does anyone know a way to display code in Microsoft Word documents that preserves coloring and formatting? Preferably, the method would also be unobtrusive and easy to update.

    I have tried to include code as regular text which looks awful and gets in the way when editing regular text. I have also tried inserting objects, a WordPad document and Text Box, into the document then putting the code inside those objects. The code looks much better and is easier to avoid while editing the rest of the text. However, these objects can only span one page which makes editing a nightmare when several pages of code need to be added.

    Lastly, I know that there are much better editors/formats that have no problem handling this but I am stuck working with MS word."
  ],

  [
    "Permission denied (publickey) when deploying heroku code. fatal: The remote end hung up unexpectedly",
    "I'm attempting to deploy my code to heroku with the following command line:

    git push heroku master
    but get the following error:

    Permission denied (publickey).
    fatal: The remote end hung up unexpectedly
    I have already uploaded my public SSH key, but it still comes up with this error."
  ],

  [
    "Pure JavaScript equivalent of jQuery's $.ready() - how to call a function when the page/DOM is ready for it [duplicate]",
    "Okay, this might just be a silly question, though I'm sure there are plenty of other people asking the same question from time to time. Me, I just want to make 100% sure about it either way. With jQuery we all know the wonderful

    $('document').ready(function(){});
    However, let's say I want to run a function that is written in standard JavaScript with no library backing it, and that I want to launch a function as soon as the page is ready to handle it. What's the proper way to approach this?"
  ],

  [
    "How to create .gitignore file",
    "I need to add some rules to my .gitignore file, however, I can't find it in my project folder. Isn't it created automatically by Xcode? If not, what command allows me to create one?"
  ],
]

direction = [1, 1, 1, -1, -1, -1, 1]

qs = []

questions.each do |question|
  q = Question.create(title: question[0], body: question[1], author_id: users.sample[:id])
  qs.push(q)
end

answers = []

#TODO generate questions from stack overflow
50.times do
  a = Answer.create(body: Faker::Lorem.unique.paragraph, author_id: users.sample.id, question_id: qs.sample.id)
  answers.push(a)
end

users.each do |user|
  answers.each do |answer|
    user_vote = answer.user_votes.find_or_initialize_by(user: user)
    user_vote.update(value: direction.sample)
  end

  qs.each do |question|
    user_vote = question.user_votes.find_or_initialize_by(user: user)
    user_vote.update(value: direction.sample)
  end
end

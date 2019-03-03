require 'pry'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# t.string :first_name
# t.string :last_name
# t.string :username
# t.string :password
# t.integer :age
# t.integer :available_cash

let benjamin = User.new("Benjamin", "Addai", "baddai123", "bigMoneyMoves", 26, 100000)
binding.pry

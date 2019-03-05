require 'pry'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



# class CreateInvestors < ActiveRecord::Migration[5.2]
#   def change
#     create_table :investors do |t|
#       t.string :uid
#       t.string :firstName
#       t.string :lastName
#       t.string :email
#       t.string :un
#       t.string :pw
#       t.string :dob
#       t.integer :available_cash
#       t.string :risk_tolerance
#
#       # below is how you format an array of strings! See the link below in case you forget
#       t.string :sectors, :array => true
#
#       t.timestamps
#     end
#   end
# end
#
# # https://dockyard.com/blog/ruby/2012/09/18/rails-4-sneak-peek-postgresql-array-support


benjamin = Investor.create(firstName: 'Benjamin' , lastName: 'Addai', email: 'ben@nvest.com' , un: 'BigMoneyMoves', pw: 'localhost3000', dob:'03-12-1992', available_cash: 100000000, risk_tolerance: 'aggressive', sectors: ["tech", "finance", "medical"]  )

brokerage = Account.create( investor_id: 1, name: 'NVest Brokerage', account_type: 'brokerage')

securitiesArr = [
  ["aapl", "stock", "technology"],
  ["amzn", "stock", "technology"],
  ["boa", "stock", "finance"],
  ["SNAP", "stock", "technology"],
  ["BRK.B", "stock", "technology"],
  ["baba", "stock", "technology"],
  ["fb", "stock", "technology"],
  ["adbe", "stock", "technology"],
  ["JPM", "stock", "finance"],
  ["F", "stock", "technology"],
  ["T", "stock", "telecom"]
]

securitiesArr.each do |security| => Security.create(symbol: security[0], asset_type: security[1], sector: security[2]))
end
aaplTaxLot = Taxlot.create

arr = [1,2,3,4,5]
arr1 = []
arr.each do |ele|
  arr1 << ele
end
puts arr



puts (benjamin)

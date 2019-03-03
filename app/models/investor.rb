class Investor < ApplicationRecord
  has_many :accounts
  has_many :securities, through: :accounts

end

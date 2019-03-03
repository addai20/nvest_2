class Security < ApplicationRecord
  has_many :taxlots
  belongs_to :account
end

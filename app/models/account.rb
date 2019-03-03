class Account < ApplicationRecord
  belongs_to :investor
  has_many :securities
end

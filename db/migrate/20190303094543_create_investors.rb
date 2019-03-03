class CreateInvestors < ActiveRecord::Migration[5.2]
  def change
    create_table :investors do |t|
      t.string :firstName
      t.string :lastName
      t.string :un
      t.string :pw
      t.string :dob
      t.integer :available_cash
      t.string :risk_tolerance
      t.array :sectors

      t.timestamps
    end
  end
end

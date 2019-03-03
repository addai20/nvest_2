class CreateAccounts < ActiveRecord::Migration[5.2]
  def change
    create_table :accounts do |t|
      t.integer :number
      t.string :name
      t.string :type
      t.array :assets
      t.array :orders
      t.array :beneficiaries


      t.timestamps
    end
  end
end

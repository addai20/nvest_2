class CreateStocks < ActiveRecord::Migration[5.2]
  def change
    create_table :stocks do |t|
      t.string :symbol
      t.string :sector
      t.string :securityType
      t.integer :bidPrice
      t.integer :askPrice
      t.integer :lastUpdated
      t.integer :volume

      t.timestamps
    end
  end
end

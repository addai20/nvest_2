class CreateTaxlots < ActiveRecord::Migration[5.2]
  def change
    create_table :taxlots do |t|
      t.integer :cost_basis
      t.integer :quantity
      t.string :buy_date
      t.string :sell_date

      t.timestamps
    end
  end
end

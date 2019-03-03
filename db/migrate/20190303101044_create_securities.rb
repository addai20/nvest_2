class CreateSecurities < ActiveRecord::Migration[5.2]
  def change
    create_table :securities do |t|
      t.string :symbol
      t.string :asset_type
      t.string :sector

      t.timestamps
    end
  end
end

class CreateSales < ActiveRecord::Migration[5.0]
  def change
    create_table :sales do |t|
      t.string :name
      t.decimal :amount
      t.string :buyer
      t.references :user, foreign_key: true

      t.timestamps
    end
  end
end

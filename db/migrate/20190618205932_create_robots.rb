class CreateRobots < ActiveRecord::Migration[5.2]
  def change
    create_table :robots do |t|
      t.string :name
      t.string :serial
      t.text :bio
      t.string :avatar

      t.timestamps
    end
  end
end

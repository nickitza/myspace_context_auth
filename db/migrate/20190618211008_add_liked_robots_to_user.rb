class AddLikedRobotsToUser < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :liked_robots, :text
  end
end

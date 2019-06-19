# frozen_string_literal: true

class User < ActiveRecord::Base
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
  include DeviseTokenAuth::Concerns::User

  has_many :posts

  serialize :liked_robots, Array

  def self.random_robot(ids)
    ids = ids.empty? ? [0] : ids
    Robot.where("id NOT IN (?)", ids).order("RANDOM()")
  end

  def self.liked(ids)
    ids = ids.empty? ? [0] : ids
    Robot.where("id IN (?)", ids)
  end

end

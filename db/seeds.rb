200.times do
  name = Faker::TvShows::StarTrek.character
  serial = Faker::Device.serial  
  bio = Faker::TvShows::RickAndMorty.quote
  avatar = Faker::Avatar.image(name, '300x300', 'png', 'set1')
  Robot.create(name: name, serial: serial, bio: bio, avatar: avatar)
end

puts "200 robots seeded"
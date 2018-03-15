20.times do 
  username = Faker::StarWars.character  
  body = Faker::StarWars.quote, 
  img = Faker::Avatar.image, 
  Post.create(username: username, body: body, img: img)
end 
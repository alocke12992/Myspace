x = 0
30.times do 
  x += 1
  user = User.create(
    name: Faker::StarWars.character,
    image: Faker::Avatar.image,
    email: "test#{x}@test.com",
    password: 'password',
  )
  5.times do 
    Post.create(
    body: Faker::StarWars.quote, 
    user_id: user.id,
    )
  end 
  1.times do 
    Bio.create(
      bio: Faker::Hipster.paragraph,
      user_id: user.id,
    )
    end 
end


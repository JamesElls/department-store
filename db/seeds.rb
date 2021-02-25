# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Department.delete_all

Department.create title:"Cannibis"
Department.create title:"Lord of The Rings Weaponry"
Department.create title:"Pokemon"






#James' Items
d1 = Department.first
d1.items.destroy_all
3.times do
    weedName = "#{Faker::Cannabis.buzzword} #{Faker::Cannabis.terpene}".camelcase
    weedDescription = "This strain #{Faker::Cannabis.health_benefit}. It is also a #{Faker::Cannabis.type}"
    d1.items.create(name: weedName,
    price:420, 
    body: weedDescription
    # belongs_to:1
    )
end


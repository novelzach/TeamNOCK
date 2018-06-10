db = db.getSiblingDB('nockdb')
db.createCollection('users')
usersCollection = db.getCollection("users")
usersCollection.remove({})
usersCollection.insert(
{
	  userID: 1,
	  fname: "Olsen",
	  lname : "Ong",
	  email: "ongo@seattleu.edu",
	  user: "ongo",
	  pass: "12345",
	  tokens: 5
}
)
usersCollection.insert(
{
	  userID: 2,
	  fname: "Zachary",
	  lname : "Brooks",
	  email: "brooksz@seattleu.edu",
	  user: "brooksz",
	  pass: "12345",
	  tokens: 7
}
)
usersCollection.insert(
{
	  userID: 3,
	  fname: "Charles",
	  lname : "Rothbacher",
	  email: "rothbach@seattleu.edu",
	  user: "rothbach",
	  pass: "12345",
	  tokens: 9
}
)
usersCollection.insert(
{
	  userID: 4,
	  fname: "Kinjal",
	  lname : "Mistry",
	  email: "mistrykinjal@seattleu.edu",
	  user: "mistrykinjal",
	  pass: "12345",
	  tokens: 11
}
)
db.createCollection('coupons')
couponsCollection = db.getCollection("coupons")
couponsCollection.remove({})
couponsCollection.insert(
{
	    couponID: 1,
	    product: "brush",
	    store: "walmart",
	    exp_date: Date("2018-07-17"),
	    discount: 15,
	    is_percent: false,
	    code: "12345zxc",
	    image: "image here",
	    token_cost: 5,
	    userID: 1
	
}
)
couponsCollection.insert(
{
	    couponID: 2,
	    product: "pillow",
	    store: "Target",
	    exp_date: Date("2018-07-07"),
	    discount: 10,
	    is_percent: true,
	    code: "12345zxc",
	    image: "image here",
	    token_cost: 7,
	    userID: 2
})
couponsCollection.insert(
{
	    couponID: 3,
	    product: "camera",
	    store: "Best Buy",
	    exp_date: Date("2018-07-17"),
	    discount: 15,
	    is_percent: false,
	    code: "12345zxc",
	    image: "image here",
	    token_cost: 10,
	    userID: 2
	 
	
}
)
couponsCollection.insert(
{
	    couponID: 4,
	    product: "toys",
	    store: "Ross",
	    exp_date: Date("2018-07-07"),
	    discount: 10,
	    is_percent: true,
	    code: "12345zxc",
	    image: "image here",
	    token_cost: 5,
	    userID: 3
}
)
couponsCollection.insert(
{
	    couponID: 5,
	    product: "somethin",
	    store: "Safeway",
	    exp_date: Date("2018-07-17"),
	    discount: 15,
	    is_percent: false,
	    code: "12345zxc",
	    image: "image here",
	    token_cost: 2,
	    userID: 3
}
)
couponsCollection.insert(
{
	    couponID: 6,
	    product: "bag",
	    store: "MK",
	    exp_date: Date("2018-07-07"),
	    discount: 10,
	    is_percent: true,
	    code: "12345zxc",
	    image: "image here",
	    token_cost: 15,
	    userID: 4
}
)

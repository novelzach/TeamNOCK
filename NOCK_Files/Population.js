db = db.getSiblingDB('nock')
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
	user : "ongo",
	coupons : [
	 {
		product: "brush",
		store: "walmart",
		exp_date: Date("2018-07-17"),
		discount: 15,
		is_percent: false,
		code: "12345zxc",
		image: "image here"
	 }
	]
}
)
couponsCollection.insert(
{
	user : "brooksz",
	coupons : [
	 {
		product: "pillow",
		store: "Target",
		exp_date: Date("2018-07-07"),
		discount: 10,
		is_percent: true,
		code: "12345zxc",
		image: "image here"
	 },
	 {
		product: "camera",
		store: "Best Buy",
		exp_date: Date("2018-07-17"),
		discount: 15,
		is_percent: false,
		code: "12345zxc",
		image: "image here"
	 }
	]
}
)
couponsCollection.insert(
{
	user : "rothbach",
	coupons : [
	 {
		product: "toys",
		store: "Ross",
		exp_date: Date("2018-07-07"),
		discount: 10,
		is_percent: true,
		code: "12345zxc",
		image: "image here"
	 },
	 {
		product: "somethin",
		store: "Safeway",
		exp_date: Date("2018-07-17"),
		discount: 15,
		is_percent: false,
		code: "12345zxc",
		image: "image here"
	 }
	]
}
)
couponsCollection.insert(
{
	user : "mistrykinjal",
	coupons : [
	 {
		product: "bag",
		store: "MK",
		exp_date: Date("2018-07-07"),
		discount: 10,
		is_percent: true,
		code: "12345zxc",
		image: "image here"
	 }
	]
}
)

import Mongoose = require("mongoose");

interface iCouponsModel extends Mongoose.Document {
    userID: Number;
    fields: [ {
	product: String;
	store: String;
	exp_date: Date;
	discount: Number;
	is_percent: Boolean;
	code: String;
	image: String;
	token_cost: Number;
    }];
};
export {iCouponsModel};

import Mongoose = require("mongoose");

interface iCouponsModel extends Mongoose.Document {
    user: String;
    coupons: [ {
	product: String;
	store: String;
	exp_date: Date;
	discount: Number;
	is_percent: Boolean;
	code: String;
	image: String;
    }];
};
export {iCouponsModel};

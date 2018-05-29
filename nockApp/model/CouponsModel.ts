import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {iCouponsModel} from '../interface/iCouponsModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class CouponsModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
                couponID: Number,
                product: String,
                store: String,
                exp_date: Date,
                discount: Number,
                is_percent: Boolean,
                code: String,
                image: String,
                token_cost: Number,
		userID: Number
            
        });
    }

    public createModel(): void {
        this.model = mongooseConnection.model<iCouponsModel>("Coupons", this.schema);
    }

    public getCoupon(response:any, filter: Object): any {
	var query = this.model.findOne(filter);
	query.exec( (err, itemArray) => {
	    response.json(itemArray);
	});
    }

    public retrieveAllCoupons(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

 /*
    Going forward, we will want a way to search for coupons based on product/store fields
    The following function is an incomplete version of this
    public getCouponProduct(response:any, filter: Object): any {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
*/
}
export {CouponsModel};

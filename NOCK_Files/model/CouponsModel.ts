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
                product: String,
                store: String,
                exp_date: Date,
                discount: Number,
                is_percent: Boolean,
                code: String,
                image: String
        });
    }

    public createModel(): void {
        this.model = mongooseConnection.model<iCouponsModel>("Coupons", this.schema);
    }

    public retrieveAllLists(response:any): any {
        var query = this.model.find({});
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }
}
export {CouponsModel};
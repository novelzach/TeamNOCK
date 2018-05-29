import Mongoose = require("mongoose");
import {DataAccess} from './../DataAccess';
import {iUserModels} from '../interface/iUserModel';

let mongooseConnection = DataAccess.mongooseConnection;
let mongooseObj = DataAccess.mongooseInstance;

class UserModel {
    public schema:any;
    public model:any;

    public constructor() {
        this.createSchema();
        this.createModel();
    }

    public createSchema(): void {
        this.schema = new Mongoose.Schema(
            {
		userID: Number,
                fname: String,
                lname: String,
                email: String,
                user: String,
                pass: String,
                tokens: Number
            });
    }

    public createModel(): void {
        this.model = mongooseConnection.model<iUserModels>("Users", this.schema);
    }

    public getUser(response:any, filter: Object): any {
        var query = this.model.findOne(filter);
        query.exec( (err, itemArray) => {
            response.json(itemArray) ;
        });
    }

    public retrieveAllUsers(response:any): any {
	var query = this.model.find({});
	query.exec( (err, itemArray) => {
	    response.json(itemArray);
	});
    }
}
export {UserModel};

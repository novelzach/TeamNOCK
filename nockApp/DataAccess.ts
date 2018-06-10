import Mongoose = require("mongoose");

class DataAccess {
    static mongooseInstance: any;
    static mongooseConnection: Mongoose.Connection;
    static DB_CONNECTION_STRING:string = 'mongodb://nockuser1:TeamNock123@ds016718.mlab.com:16718/nockdb'
    //static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/nock?authSource=admin';
    //Enter DB link above ^^

    constructor (){
	DataAccess.connect();
    }

    static connect (): Mongoose.Connection {
	if(this.mongooseInstance){
	    return this.mongooseInstance;
	}

	this.mongooseConnection = Mongoose.connection;
	this.mongooseConnection.on("open", () => {
	    console.log("Connected!");
	});

	this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
	return this.mongooseInstance;
    }
}
DataAccess.connect();
export {DataAccess};

"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess = /** @class */ (function () {
    //static DB_CONNECTION_STRING:string = 'mongodb://dbAdmin:test@localhost:3000/nock?authSource=admin';
    //Enter DB link above ^^
    function DataAccess() {
        DataAccess.connect();
    }
    DataAccess.connect = function () {
        if (this.mongooseInstance) {
            return this.mongooseInstance;
        }
        this.mongooseConnection = Mongoose.connection;
        this.mongooseConnection.on("open", function () {
            console.log("Connected!");
        });
        this.mongooseInstance = Mongoose.connect(this.DB_CONNECTION_STRING);
        return this.mongooseInstance;
    };
    DataAccess.DB_CONNECTION_STRING = 'mongodb://nockuser1:TeamNock123@ds016718.mlab.com:16718/nockdb';
    return DataAccess;
}());
exports.DataAccess = DataAccess;
DataAccess.connect();

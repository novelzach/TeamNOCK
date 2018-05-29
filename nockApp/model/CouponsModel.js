"use strict";
exports.__esModule = true;
var Mongoose = require("mongoose");
var DataAccess_1 = require("./../DataAccess");
var mongooseConnection = DataAccess_1.DataAccess.mongooseConnection;
var mongooseObj = DataAccess_1.DataAccess.mongooseInstance;
var CouponsModel = /** @class */ (function () {
    function CouponsModel() {
        this.createSchema();
        this.createModel();
    }
    CouponsModel.prototype.createSchema = function () {
        this.schema = new Mongoose.Schema({
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
    };
    CouponsModel.prototype.createModel = function () {
        this.model = mongooseConnection.model("Coupons", this.schema);
    };
    CouponsModel.prototype.getCoupon = function (response, filter) {
        var query = this.model.findOne(filter);
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    CouponsModel.prototype.retrieveAllCoupons = function (response) {
        var query = this.model.find({});
        query.exec(function (err, itemArray) {
            response.json(itemArray);
        });
    };
    return CouponsModel;
}());
exports.CouponsModel = CouponsModel;

"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
//import models here
var CouponsModel_1 = require("./model/CouponsModel");
var UsersModel_1 = require("./model/UsersModel");
var App = /** @class */ (function () {
    function App() {
        this.expressApp = express();
        this.middleware(); // builds express instance
        this.routes(); //builds routes for the service
        this.idGenerator = 100;
        this.Coupons = new CouponsModel_1.CouponsModel();
        this.Users = new UsersModel_1.UsersModel();
        //initialize models here
    }
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        //router.get here(need paths first)
        router.get('/app/user/:userID', function (req, res) {
            var id = req.params.userID;
            console.log('Query single list with id: ' + id);
            _this.Users.getUser(res, { userID: id });
        });
        router.get('/app/coupons/', function (req, res) {
            console.log('Get all coupons');
            _this.Coupons.retrieveAllCoupons(res);
        });
        /*
            router.post('/app/coupons/', (req,res) => {
                console.log(req.body);
                var jsonObj = req.body;
                jsonObj.couponsID = this.idGenerator;
                this.Coupons.model.create([jsonObj]), (err) => {
                if(err){
                    console.log('Object create failed');
                }
                });
                res.send(this.idGenerator.toString());
                this.idGenerator++;
            });
        */
        //expressApp calls here (need above routes first)
    };
    return App;
}());
exports.App = App;

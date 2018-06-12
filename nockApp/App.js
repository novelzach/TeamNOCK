"use strict";
exports.__esModule = true;
var path = require("path");
var express = require("express");
var logger = require("morgan");
var http = require("http");
var bodyParser = require("body-parser");
//import models here
var CouponsModel_1 = require("./model/CouponsModel");
var UserModel_1 = require("./model/UserModel");
var App = /** @class */ (function () {
    function App() {
        this.expressApp = express();
        this.middleware(); // builds express instance
        this.routes(); //builds routes for the service
        this.idGenerator = 100;
        this.Coupons = new CouponsModel_1.CouponsModel();
        this.Users = new UserModel_1.UserModel();
        this.server = http.createServer(this.expressApp);
        //initialize models here
    }
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
        this.expressApp.use(express.static(path.join(__dirname, 'dist/nockApp')));
        this.expressApp.set('port', '8080');
    };
    App.prototype.routes = function () {
        var _this = this;
        var router = express.Router();
        //router.get here(need paths first)
        router.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        router.get('/user/:userID', function (req, res) {
            var id = req.params.userID;
            console.log('Query single user with id: ' + id);
            _this.Users.getUser(res, { userID: id });
        });
        router.get('/coupon/:couponID', function (req, res) {
            var id = req.params.couponID;
            console.log('Query single coupon with id: ' + id);
            _this.Coupons.getCoupon(res, { couponID: id });
            console.log(id);
        });
        router.get('/coupons/', function (req, res) {
            console.log('Get all coupons');
            _this.Coupons.retrieveAllCoupons(res);
        });
        router.get('/users/', function (req, res) {
            console.log('Get all users');
            _this.Users.retrieveAllUsers(res);
        });
        router.post('/coupons', function (req, res) {
            console.log('Post request body: ${req.body}');
            var jsonObj = {};
            jsonObj.couponID = _this.idGenerator;
            jsonObj.product = req.body.product;
            jsonObj.store = req.body.store;
            jsonObj.exp_date = req.body.exp_date;
            jsonObj.discount = req.body.discount;
            jsonObj.is_percent = req.body.is_percent;
            jsonObj.code = req.body.code;
            jsonObj.image = req.body.image;
            jsonObj.token_cost = 5;
            jsonObj.userID = req.body.userID;
            _this.Coupons.model.create([jsonObj], function (err) {
                if (err) {
                    console.log('Object creation failed');
                }
            });
            res.send(jsonObj);
            _this.idGenerator++;
        });
        /*
            router.post('/coupons/', (req,res) => {
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
        this.expressApp.use('/app', router);
        this.expressApp.use('/app/json/', express.static('./app/json'));
        this.expressApp.use('/images', express.static('./img'));
        //this.expressApp.use('/', express.static('./pages'));
        this.expressApp.use('*', function (req, res) {
            res.sendFile(path.join(__dirname, 'dist/nockApp/index.html'));
        });
    };
    return App;
}());
exports.App = App;

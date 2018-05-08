"use strict";
exports.__esModule = true;
var express = require("express");
var logger = require("morgan");
var bodyParser = require("body-parser");
var App = /** @class */ (function () {
    function App() {
        this.expressApp = express();
        this.middleware(); // builds express instance
        this.routes(); //builds routes for the service
        this.idGenerator = 100;
        //initialize models here
    }
    App.prototype.middleware = function () {
        this.expressApp.use(logger('dev'));
        this.expressApp.use(bodyParser.json());
        this.expressApp.use(bodyParser.urlencoded({ extended: false }));
    };
    App.prototype.routes = function () {
        var router = express.Router();
        //router.get here(need paths first)
        //router.post here(need paths and models first)
        //expressApp calls here (need above routes first)
    };
    return App;
}());
exports.App = App;

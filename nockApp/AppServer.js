"use strict";
exports.__esModule = true;
var App_1 = require("./App");
var server = new App_1.App().expressApp;
server.listen(process.env.PORT || 8080, function () { return console.log('Server Running on 8080'); });

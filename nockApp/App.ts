import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as http from 'http';
import * as bodyParser from 'body-parser';

//import models here
import {CouponsModel} from './model/CouponsModel';
import {UserModel} from './model/UserModel';
import {DataAccess} from './DataAccess';

class App{
    public expressApp: express.Application;
    //declare models here
    public Coupons:CouponsModel;
    public Users:UserModel;
    public idGenerator:number;
    public server:any;

    constructor(){
	this.expressApp = express();
	this.middleware(); // builds express instance
	this.routes(); //builds routes for the service
	this.idGenerator = 100;
	this.Coupons = new CouponsModel();
	this.Users = new UserModel();
	this.server = http.createServer(this.expressApp);
	//initialize models here
    }

    private middleware(): void {
	this.expressApp.use(logger('dev'));
	this.expressApp.use(bodyParser.json());
	this.expressApp.use(bodyParser.urlencoded({ extended: false}));
	this.expressApp.use(express.static(path.join(__dirname, 'dist/nockApp')));
	this.expressApp.set('port', '8080');
    }

    private routes(): void {
	let router = express.Router();
	//router.get here(need paths first)

	router.use(function (req, res, next){
	    res.header("Access-Control-Allow-Origin", "*");
	    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	    next();
	});

	router.get('/user/:userID', (req, res) => {
	    var id = req.params.userID;
	    console.log('Query single user with id: ' + id);
	    this.Users.getUser(res, {userID: id});
	});

	router.get('/coupon/:couponID', (req, res) => {
	    var id = req.params.couponID;
	    console.log('Query single coupon with id: ' + id);
	    this.Coupons.getCoupon(res, {couponID: id});
	    console.log(id);
	});

	router.get('/coupons/', (req, res) => {
	    console.log('Get all coupons');
	    this.Coupons.retrieveAllCoupons(res);
	});

	router.get('/users/', (req,res) => {
	    console.log('Get all users');
	    this.Users.retrieveAllUsers(res);
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
	this.expressApp.use('*', (req, res) => {
	    res.sendFile(path.join(__dirname, 'dist/nockApp/index.html'));
	});


    }
}

export {App};

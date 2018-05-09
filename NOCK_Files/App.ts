import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

//import models here
import {CouponsModel} from './model/CouponsModel';
import {UsersModel} from './model/UsersModel';
import {DataAccess} from './DataAccess';

class App{
    public expressApp: express.Application;
    //declare models here
    public Coupons:CouponsModel;
    public Users:UsersModel;
    public idGenerator:number;

    constructor(){
	this.expressApp = express();
	this.middleware(); // builds express instance
	this.routes(); //builds routes for the service
	this.idGenerator = 100;
	this.Coupons = new CouponsModel();
	this.Users = new UsersModel();
	//initialize models here
    }

    private middleware(): void {
	this.expressApp.use(logger('dev'));
	this.expressApp.use(bodyParser.json());
	this.expressApp.use(bodyParser.urlencoded({ extended: false}));
    }

    private routes(): void {
	let router = express.Router();
	//router.get here(need paths first)

	router.get('/app/user/:userID', (req, res) => {
	    var id = req.params.userID;
	    console.log('Query single list with id: ' + id);
	    this.Users.getUser(res, {userID: id});
	});

	router.get('/app/coupons/', (req, res) => {
	    console.log('Get all coupons');
	    this.Coupons.retrieveAllCoupons(res);
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

    }
}

export {App};

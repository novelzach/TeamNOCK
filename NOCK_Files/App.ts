import * as path from 'path';
import * as express from 'express';
import * as logger from 'morgan';
import * as mongodb from 'mongodb';
import * as url from 'url';
import * as bodyParser from 'body-parser';

//import models here
import {DataAccess} from './DataAccess';

class App{
    public expressApp: express.Application;
    //declare models here
    public idGenerator:number;

    constructor(){
	this.expressApp = express();
	this.middleware(); // builds express instance
	this.routes(); //builds routes for the service
	this.idGenerator = 100;
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

	//router.post here(need paths and models first)

	//expressApp calls here (need above routes first)
    }
}

export {App};

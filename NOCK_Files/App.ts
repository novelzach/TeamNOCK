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

}

export {App};

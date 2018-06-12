var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Get', function(){
    var response;

    before(function(done){
        chai.request("http://nock.azurewebsites.net")
            .get("/app/user/3")
            .end(function(err, res){
                expect(err).to.be.null;
                expect(res).to.have.status( 200 || 304 ); //potential redirect
                done();
            });
    });

    it('shouls return user Charlie for userId 3', function(done){
        chai.request("http://nock.azurewebsites.net")
            .get("/app/user/3")
            .end(function(err, res){
                response = res;
                assert.equal("rothbach", response.user);
                done();
            });
    });

});
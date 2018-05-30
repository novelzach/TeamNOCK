// This is a test
var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Coupons', function(){
    var requestResult;
    var response;

    before(function(done){
	chai.request("http://localhost:8080")
	    .get("/app/coupons")
	    .end(function (err, res){
		response = res;
		expect(err).to.be.null;
		expect(res).to.have.status(200 || 304); //a redirect might happen
		done();
	    });
    });

    it('Should return a populated array', function (){
	expect(response).to.have.status(200 || 304); //redirect or work
	expect(response.body).to.have.length.above(2);
	expect(response).to.have.headers;
    });

    it('All elements should have expected properties', function(){
	expect(response.body).to.satisfy(
	    function(body){
		for (var i = 0; i < body.length; i++){
		    expect(body[i].to.have.property('couponID'));//num
		    expect(body[i].to.have.property('product'));//string
		    expect(body[i].to.have.property('store'));//string
		    expect(body[i].to.have.property('exp_date'));//date
		    expect(body[i].to.have.property('discount'));//num
		    expect(body[i].to.have.property('is_percent'));//bool
		    expect(body[i].to.have.property('code'));//string
		    expect(body[i].to.have.property('image'));//string
		    expect(body[i].to.have.property('token_cost'));//num
		    expect(body[i].to.have.property('userID'));//num



		}
		return true;
	    });
    });
});


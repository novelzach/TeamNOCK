var assert = require('assert');
var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var expect = chai.expect;
var should = chai.should();

var http = require('http');
chai.use(chaiHttp);

describe('Test Post', function(){
    var response;
    var testCoupon = {
        couponID: 70,
		product: "Headphones",
		store: "Best Buy",
		exp_date: Date("2018-10-27"),
		discount: 20,
		is_percent: true,
		code: "p0o9i8u7",
		image: "image here",
        token_cost: 17,
        userID: 2
	 };

    before(function(done){
        chai.request("http://nock.azurewebsites.net")
            .post('/app/coupons', testCoupon)
            .end(function(err, res){
                expect(err).to.be.null;
                expect(res).to.have.status(200 || 304);
                done();
            });
    });

    it('should successfully post a coupon', function(){
        chai.request("http://nock.azurewebsites.net")
            .get('/app/coupons/testCoupon')
            .end(function(err, res){
                response = res;
                expect(response).to.not.be.undefined;
                expect(response).to.have.property(couponID);
                expect(response).to.have.property(store);
            });

        done();
    });


});
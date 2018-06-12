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
    var testCoupon;

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
        

        done();
    });


});
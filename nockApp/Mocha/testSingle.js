// This is a test

var chai = require('chai');
var chaiHttp = require('chai-http');
var async = require('async');

var assert = chai.assert;
var should = chai.should();
var expect = chai.expect;

var http = require('http');
chai.use(chaiHttp);

describe('Test GET, single object', function() {

    it('should return a single user when called', function(done) {
        http.get('http://localhost:8080/app/user/3', function(res) {
            expect(Response).to.have.status;
            
        });
    });

    it('should return user Charlie for userId 3', function(done) {
        http.get('http://localhost:8080/app/user/3', function(res) {
            assert.equal('rothbacher', res.lname);
            done();
        });
    });
});

const request = require('supertest');
const mocha = require('mocha');
const express = require('express');
const assert = require('assert');
const app = require('../app.js');
const statusController = require('../controllers/statusController');
const portfolioController = require('../controllers/portfolioController');

// const app = express();


describe('Helpers', function() {
  describe('Current year', function() {
    it('Returns 2017 in this year 2017', function() {
      const year = new Date().getFullYear();
      assert.equal(year, 2017);
    })
  })
})

describe('Routes', function() {
	describe('GET / and return 200', function() {
	  it('responds with 200', function(done) {
		request(app)
	      .get('/')
	      .expect(200, done);
	  });
	});

	describe('GET /wrongURL and return 404', function() {
	  it('responds with 404', function(done) {
		request(app)
	      .get('/wrongURL')
	      .expect(404, done);
	  	});
	});

	describe('GET /status return 200', function() {
	  it('responds with 200', function(done) {
		request(app)
	      .get('/status')
	      .expect(200, done);
	    done();
	  	});
	});
})

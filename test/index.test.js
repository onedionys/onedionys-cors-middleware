// corsMiddleware.test.js

const assert = require('assert');
const httpMocks = require('node-mocks-http');
const corsMiddleware = require('../src/corsMiddleware');

describe('CORS Middleware', () => {
    it('should set CORS headers correctly', () => {
        const req = httpMocks.createRequest();
        const res = httpMocks.createResponse();
        const next = () => {};

        corsMiddleware(req, res, next);

        assert.equal(res._getHeaders()['access-control-allow-origin'], '*');
        assert.equal(res._getHeaders()['access-control-allow-methods'], 'GET, POST, PUT, DELETE');
        assert.equal(res._getHeaders()['access-control-allow-headers'], 'Content-Type, Authorization');
    });
});

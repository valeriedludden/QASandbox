const request = require('request');
const server = require('../app');

const base_url = 'http://localhost:3000/';
describe('server', () =>{
    afterAll(() =>{
        server.close();
    })
});

describe('server', () => {
    let data = {};



    describe('GET /', () => {
        beforeAll(done =>{
        request.get(base_url, (error, response, body) => {
            data.status = response.statusCode;
            data.body = body;
            done();
             });
        });
        it('returns status code 200', () =>{
            expect(data.status).toBe(200);
        });
        it('returns "Hello World"', () =>{
            expect(data.body).toBe('Hello World');
        });
    describe('GET /test', () =>{
        let data = {};
        beforeAll(done =>{
            request.get(`${base_url}test`, (error, response, body) =>{
                data.status = response.statusCode;
                data.body =JSON.parse(body);
                done();
            });
        });
        it('returns status code 500', () => {
            expect(data.status).toBe(500)
        });
        it('returns error message', () => {
            expect(data.body.message).toBe('error')
        });
    });

    });
});
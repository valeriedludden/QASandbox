const request = require('request');
const server = require('../app');

const base_url = 'http://localhost:3000/';
describe('server', () =>{
    afterAll(() =>{
        server.close();
    });

//user creation HomePage
describe("GET /", () =>{
    let data = {};
    beforeAll(done =>{
       request.get(base_url, (error, response, body) =>{
           data.stausCode = response.statusCode;
           done();
       });
    });
    it("returns status code 200", () =>{
        expect(data.stausCode).toBe(200)
    })
});

describe("POST /user", () =>{
    let data = {};
    beforeAll(done => {
        request.post({
            url: `${base_url}user`,
            form: {
                userId: '123',
                name: 'Valerie',
                email: 'valudden@gmail.com',
                age: '44'
            }
        },
            (error, response,body)=>{
            data.stausCode = response.statusCode;
            done();
        });
    });
    it("returns status code 302", () => {
        expect(data.stausCode).toBe(302)
    });
});

describe("GET /user/unqueId", () => {
    let data = {};
    const uniqueId = "what ever the id is";
    beforeAll(done => {
        request.get(`${base_url}user/${uniqueId}`, (error, respone, body) =>{
            data.stausCode = response.statusCode;
            data.body = body;
            done();
        })
    });
    it('should edit the correct user', () =>{
        expect(data.statusCode).toBe(200);
        expect(data.body).toContain(`<input type="hidden" name="uniqueId" id="uniqueId" value='${useruniqueId}'/>`)
    })
});

describe("POST /user", () => {
    let data = {};
    const uniqueId = "what ever the id is";
    beforeAll(done => {
        request.post({
                url : `${base_url}edituser`,
                form : {
                    userId : 'new user id',
                    name : 'new name',
                    email : 'new email',
                    age : '44'
                }
            },
            (error, response, body) => {
                data.stausCode = response.statusCode;
                data.body = body;
                done();
            });
    });
    it('should edit the user', done => {
        request.get(`${base_url}userlist`, (error, response, body) => {
            expect(response.stausCode).toBe(200);
            expect(body).toContain(`<td>newUserId</td>`);
            done();
            });
        });
    });
});




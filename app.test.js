const request = require("supertest");
const app = require("./app")

describe("Test the demo server", () => {
    test("testing GET /", done => {
        request(app)
        .get("/")
        .then(res => {
            expect(res.statusCode).toBe(200);
            done();
        });
    });
});

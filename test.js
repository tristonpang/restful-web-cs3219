let assert = require("assert");
const chai = require("chai");
const { expect } = chai;
const server = require("./index");
const chaiHttp = require("chai-http");

chai.use(chaiHttp);

describe("Array", () => {
  it("should return -1 when value is not present", () => {
    assert.equal([1, 2, 3].indexOf(4), -1);
  });

  it("should verify testString's value and type", () => {
    var testString = "foo";
    expect(testString).to.be.a("string");
    expect(testString).to.equal("foo");
  });

  it("should successfully GET /test", (done) => {
    chai
      .request(server)
      .get("/api/test")
      .end((err, res) => {
        expect(res.body.message).to.equal("Test success");
        done();
      });
  });
});

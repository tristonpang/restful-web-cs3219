const chai = require("chai");
const like = require("chai-like");
chai.use(like);

const { expect } = chai;
const server = require("./index.local.js");
const chaiHttp = require("chai-http");

const Contact = require("./contactModel");

chai.use(chaiHttp);

describe("API", () => {
  let fetchContactId;
  const testContact1Json = {
    name: "John Doe",
    gender: "Male",
    email: "test1@gmail.com",
    phone: "12345678",
  };
  const newContact = {
    name: "Mark John",
    gender: "Male",
    email: "newcontact@gmail.com",
    phone: "11111111",
  };

  const testContact2Json = {
    name: "Jeremy Doe",
    email: "editedcontact@gmail.com",
  };

  before((done) => {
    Contact.remove({}, (err) => {
      done();
    });
    var testContact1 = new Contact();
    testContact1.name = "John Doe";
    testContact1.gender = "Male";
    testContact1.email = "test1@gmail.com";
    testContact1.phone = "12345678";

    testContact1.save();
  });

  it("should successfully GET all contacts", (done) => {
    chai
      .request(server)
      .get("/api/contacts")
      .end((err, res) => {
        expect(res.body.data).to.be.like([
          testContact1Json,
        ]);
        fetchContactId = res.body.data[0]["_id"];
        done();
      });
  });

  it("should successfully POST a new contact", (done) => {
    chai
      .request(server)
      .post(`/api/contacts`)
      .send(newContact)
      .end((err, res) => {
        expect(res.body.data).to.be.like(newContact);
        done();
      });
  });

  it("should successfully show all contacts correctly after adding a contact", (done) => {
    chai
      .request(server)
      .get(`/api/contacts`)
      .end((err, res) => {
        expect(res.body.data).to.be.like([testContact1Json, newContact]);
        done();
      });
  });

  it("should successfully GET a specific contact", (done) => {
    chai
      .request(server)
      .get(`/api/contacts/${fetchContactId}`)
      .end((err, res) => {
        expect(res.body.data).to.be.like(testContact1Json);
        done();
      });
  });

  it("should successfully update a specific contact", (done) => {
    chai
      .request(server)
      .put(`/api/contacts/${fetchContactId}`)
      .send(testContact2Json)
      .end((err, res) => {
        expect(res.body.data).to.be.like(testContact2Json);
        done();
      });
  });

  it("should successfully show all contacts correctly after updating a contact", (done) => {
    chai
      .request(server)
      .get(`/api/contacts`)
      .end((err, res) => {
        expect(res.body.data).to.be.like([testContact2Json, newContact]);
        done();
      });
  });

  it("should successfully DELETE a specific contact", (done) => {
    chai
      .request(server)
      .delete(`/api/contacts/${fetchContactId}`)
      .end((err, res) => {
        expect(res.body.message).to.be.equal('Contact deleted');
        done();
      });
  });

  it("should successfully show all contacts correctly after deleting a contact", (done) => {
    chai
      .request(server)
      .get(`/api/contacts`)
      .end((err, res) => {
        expect(res.body.data).to.be.like([newContact]);
        done();
      });
  });

  
});

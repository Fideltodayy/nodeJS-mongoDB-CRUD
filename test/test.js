// Import necessary modules and dependencies
const Blog = require("../models/Blog");
const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../app");
chai.should();

chai.use(chaiHttp);

// Start describing the tests for the "Blogs" functionality
describe("Blogs", () => {
    // Run this function before each test case
    beforeEach((done) => {
        // Delete all existing blogs from the database
        Blog.deleteMany({}, (err) => {
            done();
        });
    });

    // Test case for the "/GET blog" endpoint
    describe("/GET blog", () => {
        it("it should GET all the blogs", (done) => {
            // Send a GET request to the "/api/blogs" endpoint
            chai
                .request(app)
                .get("/api/blogs")
                .end((err, res) => {
                    // Assert that the response has a status code of 200
                    res.should.have.status(200);
                    // Assert that the response body contains an array of blogs
                    res.body.data.should.be.a("array");
                    // Assert that the length of the array is 0 (since we deleted all blogs in beforeEach)
                    res.body.data.length.should.be.eql(0);
                    done();
                });
        });
    });

    // Test case for the "/POST blog" endpoint
    describe("/POST blog", () => {
        it("it should new POST a blog", (done) => {
            // Create a new blog object
            let blog = {
                title: "This is the first blog",
                body: "This is a blog post",
                image:
                    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            };
            // Send a POST request to the "/api/blogs" endpoint with the blog object as the payload
            chai
                .request(app)
                .post("/api/blogs")
                .send(blog)
                .end((err, res) => {
                    // Assert that the response has a status code of 200
                    res.should.have.status(200);
                    // Assert that the response body contains a blog object
                    res.body.data.should.be.a("object");
                    // Assert that the response status is "success"
                    res.body.status.should.be.eql("success");
                    done();
                });
        });
    });

    // Test case for the "/GET/:id blog" endpoint
    describe("/GET/:id blog", () => {
        it("it should GET a blog by the id", (done) => {
            // Create a new blog object and save it to the database
            let blog = new Blog({
                title: "This is the first blog",
                body: "This is a blog post",
                image:
                    "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
            });
            blog.save((err, blog) => {
                // Send a GET request to the "/api/blogs/:id" endpoint with the blog id as a parameter
                chai
                    .request(app)
                    .get("/api/blogs/" + blog.id)
                    .send(blog)
                    .end((err, res) => {
                        // Assert that the response has a status code of 200
                        res.should.have.status(200);
                        // Assert that the response body contains a blog object
                        res.body.data.should.be.a("object");
                        // Assert that  beforeEach((done) => {
    Blog.deleteMany({}, (err) => {
      done();
    });
  });
  describe("/GET blog", () => {
    it("it should GET all the blogs", (done) => {
      chai
        .request(app)
        .get("/api/blogs")
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("array");
          res.body.data.length.should.be.eql(0);
          done();
        });
    });
  });
  describe("/POST blog", () => {
    it("it should new POST a blog", (done) => {
      let blog = {
        title: "This is the first blog",
        body: "This is a blog post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      };
      chai
        .request(app)
        .post("/api/blogs")
        .send(blog)
        .end((err, res) => {
          res.should.have.status(200);
          res.body.data.should.be.a("object");
          res.body.status.should.be.eql("success");
          done();
        });
    });
  });
  describe("/GET/:id blog", () => {
    it("it should GET a blog by the id", (done) => {
      let blog = new Blog({
        title: "This is the first blog",
        body: "This is a blog post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      blog.save((err, blog) => {
        chai
          .request(app)
          .get("/api/blogs/" + blog.id)
          .send(blog)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/PUT/:id blog", () => {
    it("it should UPDATE a blog given the id", (done) => {
      let blog = new Blog({
        title: "This is the first blog",
        body: "This is a blog post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      blog.save((err, blog) => {
        console.log(blog.id);
        chai
          .request(app)
          .put("/api/blogs/" + blog.id)
          .send({
            title: "The first blog was updated",
            body: "This is a blog post",
            image:
              "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
          })
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
  describe("/DELETE/:id blog", () => {
    it("it should DELETE a blog given the id", (done) => {
      let blog = new Blog({
        title: "This is the first blog",
        body: "This is a blog post",
        image:
          "https://images.unsplash.com/photo-1518791841217-8f162f1e1131?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60",
      });
      blog.save((err, blog) => {
        chai
          .request(app)
          .delete("/api/blogs/" + blog.id)
          .end((err, res) => {
            res.should.have.status(200);
            res.body.data.should.be.a("object");
            res.body.status.should.be.eql("success");
            done();
          });
      });
    });
  });
});

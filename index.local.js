const { local: app } = require("./index");
let mongoose = require("mongoose");

// Setup server port
var port = process.env.PORT || 8080;

// Connect to Mongoose and set connection variable
mongoose
  .connect(`mongodb://localhost:27017/task-b`, {
    useNewUrlParser: true,
    // user: 'root',
    // pass: 'pw123',
  })
  .then(() => console.log("Db connected to local successfully"))
  .catch(err => console.log('Error connecting to the database:', err));
// var db = mongoose.connection;

app.listen(port, function () {
  console.log("Running REST server on port " + port);
});

module.exports = app;

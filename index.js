let express = require("express");
let bodyParser = require("body-parser");
let mongoose = require("mongoose");
let apiRoutes = require("./api-routes");

// Initialize the app
let app = express();

// Configure body-parser to handle POST requests
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

// Connect to Mongoose and set connection variable
mongoose
  .connect(`mongodb://localhost:27017/task-b`, {
    useNewUrlParser: true,
    // user: 'root',
    // pass: 'pw123',
  })
  .then(() => console.log("Db connected successfully"))
  .catch(err => console.log('Error connecting to the database:', err));
var db = mongoose.connection;

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get("/", (req, res) => res.send("Hello World with Express"));

// Import and use API routes
app.use("/api", apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
  console.log("Running REST server on port " + port);
});

module.exports = app; // export for testing

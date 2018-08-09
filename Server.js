// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7500;

// Create a generic function to handle requests and responses
function handleRequestOne(request, response) {
  response.end("You're a JavaScript mastermind!");
}
function handleRequestTwo(request, response) {
  response.end("JavaScript must not be your forte.");
}

  // Create our servers
var serverOne = http.createServer(handleRequestOne);
var serverTwo = http.createServer(handleRequestTwo);

// Start our server so that it can begin listening to client requests.
serverOne .listen(PORTONE, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTONE);
});
serverTwo .listen(PORTTWO, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORTTWO);
});
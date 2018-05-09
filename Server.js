// Require/import the HTTP module
var http = require("http");

// Define a port to listen for incoming requests
var PORTONE = 7000;
var PORTTWO = 7500;

// Create a generic function to handle requests and responses
function handleRequestONE(request, response)
function handleRequestONE(request, response) {

  // Send the below string to the client when the user visits the PORT URL
  response.end("tell the user something good about themselves: " + request.url);
}
  response.end("tell the user something bad about themselves: " + request.url);


// Use the Node HTTP package to create our server.
// Pass the handleRequest function to empower it with functionality.
var server = http.createServer(handleRequest);

// Start our server so that it can begin listening to client requests.
server.listen(PORT, function() {

  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});

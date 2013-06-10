// node.js server file

//require http module
var http = require("http");

// set up the http request/response procedure
function onRequest(request, response) {
    console.log("Request received.");
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}

// create the server
http.createServer(onRequest).listen(8888);

// display confirmation that server started
console.log("Server has started.");

// node.js server file

//require http module
var http = require("http");

// set up the http request/response procedure
http.createServer(function(request, response) {
    response.writeHead(200, {"Content-Type": "text/plain"});
    response.write("Hello World");
    response.end();
}).listen(8888);
